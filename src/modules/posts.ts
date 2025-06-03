import { getPosts } from "../api/posts"
import { icons } from "../utils/icons"
import { newLike } from "../api/posts"

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
                <button id="btnLike-${post.id}" class="cursor-pointer flex">
                    <i data-lucide="heart"></i>
                    <span id="likeQnt-${post.id}">${post.like}</span>
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
    for (const post of posts) {
        const btnLike = document.getElementById(`btnLike-${post.id}`) as HTMLButtonElement
        btnLike.addEventListener('click', async () => {
            const likeQnt = document.getElementById(`btnQnt-${post.id}`) as HTMLSpanElement
            await newLike(post.id, post.like + 1)
            likeQnt.innerText = (post.like + 1).toString()

        })
    }
    
    icons()
}

