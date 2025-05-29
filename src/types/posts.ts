import type { User } from "./users"

export interface Posts {
  id: string
  title: string
  description: string
  like: number
  userId: string
  createdAt: string
  updatedAt: string
  deletedAt: string
  user?: User
}