import type { Posts } from '../types/posts'
import axiosInstance from './index'

export async function getPosts(params?: string) {
    // destructing
    const { data } = await axiosInstance.get<Posts[]>(`/posts?${params}`);

    return data
}

export async function newLike(postId: string, like: number) {
    const { data } = await axiosInstance.patch<Posts>(`/posts/${postId}`, { like: like })

    return data
}