import axiosInstance from './index'

export async function getUsers() {
    const { data } = await axiosInstance.get('/users')

    return data
}