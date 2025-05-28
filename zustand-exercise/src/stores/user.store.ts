import { create } from 'zustand'
import type { User } from '../types/user'
import { persist } from 'zustand/middleware'


type UsersState = {
    users: User[]
    addUser: (user: User) => void
    deleteUser: (userId: string) => void
}

export const useUsersStore = create(
    persist<UsersState>(
        (set) => ({
            users: [],
            addUser: (user) => set((state) => ({users: [...state.users, user]})),
            deleteUser: (userId) => set((state) => ({users: state.users.filter(user => user.id !== userId)}))
        }),
        {
            name: 'localUsers'
        }
    )
)