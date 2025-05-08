/**
 * 1 - Operators: typeof e keyof
 * 2 - Generics
 * 3 - Utilitarios bultin
 * 4 - Template literal
 * 5 - Overload functions
 */

type User = {
    id: number;
    name: string;
    role: 'admin' | 'editor' | 'viewer';
};

const users: User[] = [
    { id: 1, name: 'Ana', role: 'admin' },
    { id: 2, name: 'Bruno', role: 'editor' },
    { id: 3, name: 'Clara', role: 'viewer' },
    { id: 4, name: 'Daniel', role: 'editor' },
];

// 1.1 - typeof
const exampleUser: User = {
    id: 10,
    name: 'Gabriel',
    role: 'viewer',
};

function printUser(user: typeof exampleUser) {
    console.log(`${user.name} é um ${user.role}`);
}

printUser(exampleUser)

// 1.2 - keyof
function getUserProperty(user: User, key: keyof User) {
    return user[key];
}

const userName = getUserProperty(users[0], 'name');
console.log(userName)

// 2 - Generics
const user: User = {
    id: 1,
    name: 'Ana',
    role: 'viewer',
};

function updateProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
    return { ...obj, [key]: value };
}

const updatedUser = updateProperty(user, 'role', 'admin');
console.log(updatedUser)

// 3 - Utilitários

// 4 - Template Literal
type UserProp = keyof User;
type GetPropLabel = `user.${UserProp}`;

function getLabel(key: GetPropLabel) {
    console.log(`Label requisitada: ${key}`);
}

getLabel('user.name')

// 5 - Overload functions
type UserInput = {
    name: string;
    role: 'admin' | 'editor' | 'viewer';
};

type Action = 'create' | 'edit';

function handleUserAction(action: 'create', data: UserInput): void;
function handleUserAction(action: 'edit', data: UserInput, id: number): void;
function handleUserAction(action: Action, data: UserInput, id?: number): void {
    if (action === 'edit') {
        if (id === undefined) {
            throw new Error('ID é obrigatório para edição');
        }
        console.log(`Editando usuário ${id} com os dados:`, data);
    } else {
        console.log('Criando novo usuário com os dados:', data);
    }
}

handleUserAction('create', { name: 'Lucas', role: 'viewer' });
handleUserAction('edit', { name: 'João', role: 'editor' }, 42);
