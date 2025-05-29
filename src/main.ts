import { loginPage } from "./modules/login"
import { postsPage } from "./modules/posts"
import { userPage } from "./modules/user"
import { icons } from "./utils/icons"

const nav = document.getElementById('navbar') as HTMLElement
const divPosts = document.getElementById('div-posts') as HTMLElement
const divPerfil = document.getElementById('div-perfil') as HTMLElement
const divLogout = document.getElementById('div-logout') as HTMLElement

export function isLogged(): void {
    const user = JSON.parse(localStorage.getItem('user')!)
    
    if (user === null || user === undefined) {
        nav.style.display = 'none'
        loginPage()
    } else {
        nav.style.display = 'block'
        userPage()
    }

    icons()
}

isLogged()

divPosts.addEventListener('click', () => { 
    postsPage()
})

divPerfil.addEventListener('click', () => {
   userPage()
})

divLogout.addEventListener('click', () => {
    localStorage.removeItem('user')

    isLogged()
})