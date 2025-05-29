import type { User } from "../types/users"
import { icons } from "../utils/icons"

const app = document.getElementById('app') as HTMLElement

export function userPage() {
    const user: User = JSON.parse(localStorage.getItem('user')!)

    app.innerHTML = `
        <div class="m-auto mb-3 w-[600px] p-8 bg-white rounded-lg shadow-lg">
            <div class="flex justify-between">
                <div class="text-2xl">
                    Informações do usuário
                </div>
                <button id="editBtn" class="flex space-x-2 p-2 border rounded-md bg-slate-600 text-white hover:bg-slate-700 cursor-pointer">
                    <i data-lucide="square-pen"></i>
                    <span>Editar Perfil</span>
                </button>
            </div>

            <div class="flex items-center space-x-4">
                <img class="border rounded-full w-20 h-20" src="${user.image_url}" />
                <div class="flex flex-col">
                    <div>${user.name}</div>
                    <div>${user.email}</div>
                </div>
            </div>

            <div class="flex flex-col w-[300px] mt-10">
                <div class="flex flex-col">
                    <label>Nome</label>
                    <input id="inputName" type="text" placeholder="Nome" class="rounded-sm" value="${user.name}" disabled>
                </div>
                <div class="flex flex-col">
                    <label>Idade</label>
                    <input id="inputAge" type="number" placeholder="Idade" class="rounded-sm" value="${user.age}" disabled>
                </div>
            </div>
            <button id="saveBtn" class="w-28 p-2 border rounded-md bg-green-600 text-white hover:bg-green-700" disabled>Salvar</button>
        </div>
    `

    const editBtn = document.getElementById('editBtn') as HTMLButtonElement
    const saveBtn = document.getElementById('saveBtn') as HTMLButtonElement
    const inputName = document.getElementById('inputName') as HTMLInputElement
    const inputAge = document.getElementById('inputAge') as HTMLInputElement

    editBtn.addEventListener('click', () => {
        enableInput(inputName)
        enableInput(inputAge)
        saveBtn.disabled = false
    })

    saveBtn.addEventListener('click', () => {

    })

    icons()
}

function enableInput(input: HTMLInputElement) {
    input.style.border = 'solid 1px'
    input.style.padding = '0 4px'
    input.disabled = false
}