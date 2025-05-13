import type { Posts } from '../types/posts'
import axiosInstance from './index'

export async function getPosts() {
    // destructing
    const { data } = await axiosInstance.get<Posts[]>('/posts')

    return data
}