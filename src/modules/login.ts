const nav = document.getElementById('navbar') as HTMLElement
const signCard = document.getElementById('signCard') as HTMLElement

export function isLogged(login:boolean): void{
    if  (!login&&nav){
        nav.style.display = 'none'
    }
}