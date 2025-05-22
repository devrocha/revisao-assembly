import type { User } from '../types/users'
import axiosInstance from './index'

export async function getUsers() {
    const { data } = await axiosInstance.get<User[]>('/users')

    return data
}