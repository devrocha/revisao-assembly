import { getUsers } from './user'

const nav = document.getElementById('navbar') as HTMLElement;
const app = document.getElementById('app') as HTMLElement;

export function isLogged(login: boolean): void {

  if (!login && nav) {
    nav.style.display = 'none';
    loginPage()
  }
}

export function loginPage() {


  app.innerHTML = `<div class="flex items-center justify-center h-full">
      <div class="m-auto w-[400px] p-8 bg-white rounded-lg shadow-lg">
        <div class="flex flex-col items-center mb-8">
          <i data-lucide="user" class="w-10 h-10 text-gray-700"></i>
          <h2 class="text-2xl mt-2">Logue com seu usuário</span>
        </div>
        <form>
         <div class="flex flex-col items-center space-y-4">
          <div class="flex flex-col w-full">
            <label for="">Email</label>
            <input type="text" placeholder="email" class="w-full px-4 py-2 mt-1 border rounded-md">
          </div>
           <div class="flex flex-col w-full">
            <label for="">Senha</label>
            <input type="password" placeholder="Senha" class="w-full px-4 py-2 mt-1 border rounded-md">
           </div>
           <button type="submit" class="w-full py-2 px-4 text-white rounded-md bg-indigo-600  hover:bg-indigo-700">Login</button>
         </div>
        </form>
      </div>
    </div>`;

  const form = document.querySelector('form') as HTMLFormElement;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = (form.querySelector('input[type="text"]') as HTMLInputElement).value;
    const password = (form.querySelector('input[type="password"]') as HTMLInputElement).value;

    const users = await getUsers();

    const user = users.find((user: { email: string; password: string; }) =>
      user.email === email && user.password === password);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      nav.removeAttribute('style');
      app.innerHTML = `<div class="flex items-center justify-center h-full">
        <div class="m-auto w-[400px] p-8 bg-white rounded-lg shadow-lg">
          <h2 class="text-2xl mt-2">Bem-vindo, ${user.name}</span>
        </div>`;

    } else {
      alert('Usuário não cadastrado ou senha incorreta');
    }
  });
}