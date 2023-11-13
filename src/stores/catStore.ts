import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type CatStoreState = {
  cats: {
    bigCats: number
    smallCats: number
  }
  increaseBigCatPopulation: () => void
  increaseSmallCatPopulation: () => void
  total: () => void
}

export const useCatStore = create<CatStoreState>()(
  immer((set, get) => ({
    cats: {
      bigCats: 0,
      smallCats: 0
    },
    increaseBigCatPopulation: () =>
      set((state) => {
        state.cats.bigCats++
      }),
    increaseSmallCatPopulation: () =>
      set((state) => {
        state.cats.smallCats++
      }),
    total: () => {
      const total = get().cats.bigCats + get().cats.smallCats
      return total
    }
  }))
)
