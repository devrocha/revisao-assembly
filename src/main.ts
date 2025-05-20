import { isLogged } from './api/login';
import { getUsers } from './api/user';

isLogged(false);

const users = await getUsers()

console.log(users)

//localStorage.setItem('users', JSON.stringify(users[0]))
//localStorage.getItem