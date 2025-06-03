import type { User } from '../types/users'
import axiosInstance from './index'

export async function getUsers() {
    const { data } = await axiosInstance.get<User[]>('/users')

    return data
}

export async function updateUser(id: string, params: Partial<User>) {
    const { data } = await axiosInstance.patch<User>(`/users/${id}`, params)

    return data
}