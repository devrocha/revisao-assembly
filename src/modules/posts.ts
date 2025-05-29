import { getPosts } from "../api/posts"
import { icons } from "../utils/icons"

const app = document.getElementById('app') as HTMLElement

export async function postsPage() {

    const posts = await getPosts(`_embed=user`)
    console.log(posts)

let postsHTML = ''
for (const post of posts) {
    postsHTML += `
    <div class="m-auto w-[400px] p-8 bg-white rounded-lg shadow-lg">
        <div class="flex">
            <img class="border rounded-full w-20 h-20" src="${post.user?.image_url}"></img>
            <div class="flex flex-col">
            <p>${post.user?.name}</p>
            <p>${post.createdAt}</p>
            </div>
        </div>

        <div>
            ${post.description}
        </div>

        <div class="flex justify-between">
            <div class="flex">
            <button class="cursor-pointer flex">
            <i data-lucide="heart"></i>
            <spn>${post.like}</spn>
            </button>
            <button class="cursor-pointer"><i data-lucide="message-circle"></i></button>
            </div>
            <button>
            show comments
            </button>
        </div>

    </div>`
    
    }
    app.innerHTML = postsHTML
    icons()
}

