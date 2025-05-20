import { getUsers } from "./api/user";
import { isLogged } from "./modules/login";

const signButton = document.getElementById('signInButton') as HTMLButtonElement

isLogged(false)
const users = await getUsers()
console.log(users)