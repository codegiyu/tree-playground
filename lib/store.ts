import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { createCurrentTreeSlice } from './slices/createCurrentTreeSlice'
import { CurrentTreeSlice } from './slices/createCurrentTreeSlice'

type AppStoreState = CurrentTreeSlice

export const useAppStore = create<AppStoreState>()(persist(
    (...a) => ({
    ...createCurrentTreeSlice(...a)
    }),
    {
        name: 'app-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
))