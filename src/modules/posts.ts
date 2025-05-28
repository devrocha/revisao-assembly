import { getPosts, newLike } from "../api/posts"
import { icons } from "../utils/icons";

const app = document.getElementById('app') as HTMLElement

export async function postsPage() {
    const posts = await getPosts('_embed=user');

    app.innerHTML = ''

    for (const post of posts) {
        app.innerHTML += `
        <div class="m-auto mb-3 w-[400px] p-8 bg-white rounded-lg shadow-lg">
            <div class="flex">
                <img class="border rounded-full w-20 h-20" src='${post.user?.image_url}'>
                <div class="flex flex-col">
                <p>${post.user?.name || 'nome não cadastrado'}</p>
                <p>${post.createdAt} </p>
                </div>
            </div>

            <div>
                ${post.description}
            </div>

            <div class="flex justify-between">
                <div>
                <button  id="btnLike-${post.id}" class="cursor-pointer flex">
                  <i data-lucide="heart"></i>
                  <span>${post.like}<span/>
                </button>
                <button class="cursor-pointer"><i data-lucide="message-circle"></i></button>
                </div>
                <button>
                 
                </button>
            </div>
        </div>
        `
    }

    for (const post of posts) {
        const btnLike = document.getElementById(`btnLike-${post.id}`) as HTMLButtonElement

        btnLike.addEventListener('click', async () => {
            await newLike(post.id, post.like + 1)

            postsPage()
        })
    }

    icons()
}
