import { getUsers } from "../api/user"
import { isLogged } from "../main"

const app = document.getElementById('app') as HTMLElement

export async function login(email: string, password: string) {
  const users = await getUsers()
  const user = users.find(user => user.email === email && user.password === password)

  if (user) {
    localStorage.setItem('user', JSON.stringify(user))
  } else {
    window.alert('Usuário não cadastrado!')
  }
}

export function loginPage() {
  app.innerHTML = `
    <div class="flex items-center justify-center">
      <div class="m-auto w-[400px] p-8 bg-white rounded-lg shadow-lg">
        <div class="flex flex-col items-center mb-8">
          <i data-lucide="user" class="w-10 h-10 text-gray-700"></i>
          <h2 class="text-2xl mt-2">Logue com seu usuário</span>
        </div>

        <form class="flex flex-col items-center space-y-4">
          <div class="flex flex-col w-full">
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="email" class="w-full px-4 py-2 mt-1 border rounded-md">
          </div>
          <div class="flex flex-col w-full">
            <label for="password">Senha</label>
            <input id="password" type="password" placeholder="Senha" class="w-full px-4 py-2 mt-1 border rounded-md">
          </div>

          <button type="submit" id="loginBtn" class="w-full py-2 px-4 cursor-pointer text-white rounded-md bg-indigo-600  hover:bg-indigo-700">Login</button>
        </div>
      </div>
    `

  const email = document.getElementById('email') as HTMLInputElement
  const password = document.getElementById('password') as HTMLInputElement
  const loginBtn = document.getElementById('loginBtn') as HTMLButtonElement

  loginBtn.addEventListener('click', async (event) => {
    event?.preventDefault()

    await login(email.value, password.value)
  })
}
