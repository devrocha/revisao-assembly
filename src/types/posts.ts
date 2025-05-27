import type { User } from "./users"

export interface Posts {
  id: string
  title: string
  description: string
  like: number
  userId: string
  createAt: string
  updateAt: string
  deleteAt: string
  user?: User
}