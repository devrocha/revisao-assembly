import { icons } from "./utils/icons";
import { loginPage } from "./modules/login";
import { postsPage } from "./modules/posts";

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
    postsPage()
  }

  icons()
}
isLogged()
// localStorage.setItem('user', JSON.stringify(users[0]))
// const user = JSON.parse(localStorage.getItem('user'))


divPosts.addEventListener('click', () => {
  console.log('posts')
  postsPage()
  icons()
})

divPerfil.addEventListener('click', () => {
  console.log('perfil')
  // perfilPage()
  
})

divLogout.addEventListener('click', () => {
  localStorage.removeItem('user')
  isLogged()
})