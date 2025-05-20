import { icons } from "../utils/icons"


const nav = document.getElementById('navbar') as HTMLElement
const app = document.getElementById('app') as HTMLElement

export function isLogged(login: boolean): void {
    if (!login && nav) {
        nav.style.display = 'none'
        loginPage()
    }

    icons()
}

export function loginPage() {
    app.innerHTML = `
    <div class="flex items-center justify-center h-full">
      <div class="m-auto w-[400px] p-8 bg-white rounded-lg shadow-lg">
        <div class="flex flex-col items-center mb-8">
          <i data-lucide="user" class="w-10 h-10 text-gray-700"></i>
          <h2 class="text-2xl mt-2">Logue com seu usuário</span>
        </div>

        <div class="flex flex-col items-center space-y-4">
          <div class="flex flex-col w-full">
            <label for="">Email</label>
            <input type="text" placeholder="email" class="w-full px-4 py-2 mt-1 border rounded-md">
          </div>
          <div class="flex flex-col w-full">
            <label for="">Senha</label>
            <input type="text" placeholder="Senha" class="w-full px-4 py-2 mt-1 border rounded-md">
          </div>

          <button class="w-full py-2 px-4 text-white rounded-md bg-indigo-600  hover:bg-indigo-700">Login</button>
        </div>
      </div>
    </div>
    `
}