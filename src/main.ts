import { getUsers } from "./api/user";
import { isLogged } from "./modules/login";

isLogged(true)

const users = await getUsers()

console.log(users)

