import { isLogged } from "./modules/login";
import { getUsers } from "./api/user";
import { icons } from "./utils/icons";

export async function login(email: string, password: string) {
    const users = await getUsers()
    const user = users.find(user => user.email === email && user.password === password)

    if (user) {
        localStorage.setItem('user', JSON.stringify(user))
    } else {
        window.alert('Usuário não cadastrado!')
    }

    isLogged()
}

isLogged()
// localStorage.setItem('user', JSON.stringify(users[0]))
// const user = JSON.parse(localStorage.getItem('user'))
