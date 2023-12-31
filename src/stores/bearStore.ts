import { create } from 'zustand'

type BearStoreState = {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

export const useBearStore = create<BearStoreState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))
