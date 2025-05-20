const nav = document.getElementById('navbar') as HTMLElement;
const app = document.getElementById('app') as HTMLElement;

export function isLogged(login: boolean): void {

    if (!login && nav) {
        nav.style.display = 'none';
        loginPage()
    }
}

export function loginPage() {

    app.innerHTML = `<div class="bg-white w-96 min-h-1/2 position absolute top-1/6 left-2/5  rounded-lg shadow-lg p-5">
      <div class="flex flex-col items-center justify-center">
        <i data-lucide="user" class="w-15 h-15"></i>
        <span class="text-2xl p-4">Logue com o seu usuário</span>
      </div>
      <form>
        <div class="px-5 py-0 m-0">
          <label>Email</label>
        </div>
        <div class="p-2 m-0">
          <input type="text" placeholder="Enter your email" class="border border-gray-300 rounded-lg p-2 w-80" />
        </div>
        <div class="px-5 py-0 m-0">
          <label>Password</label>
        </div>
        <div class="p-2 m-0">
          <input type="password" placeholder="Enter your password" class="border border-gray-300 rounded-lg p-2 w-80" />
        </div>
        <div>
          <button class="bg-blue-500 text-white rounded-lg p-2 m-4 w-80">Sign In</button>
        </div>
      </form>

    </div>`
}