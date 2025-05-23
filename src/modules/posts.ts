const app = document.getElementById('app') as HTMLElement

export function postsPage() {
  app.innerHTML = `<div class="m-auto w-[400px] p-8 bg-white rounded-lg shadow-lg">
      <div class="flex">
        <div class="border rounded-full">avatar</div>
        <div class="flex flex-col">
          <p>nome do usuário</p>
          <p>data da postagem</p>
        </div>
      </div>

      <div>
        corpo com texto
      </div>

      <div class="flex justify-between">
        <div>
          <button class="cursor-pointer"><i data-lucide="heart"></i></button>
          <button class="cursor-pointer"><i data-lucide="message-circle"></i></button>
        </div>
        <button>
          show comments
        </button>
      </div>
    </div>`
}   