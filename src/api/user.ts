import axiosIntance from './index'

export async function getUsers() {
    const { data } = await axiosIntance.get('/users')
    return data
}