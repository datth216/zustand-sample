import { useCatStore } from '../stores/catStore'

export default function CatBox() {
  const bigCats = useCatStore((state) => state.cats.bigCats)
  const smallCats = useCatStore((state) => state.cats.smallCats)
//   const totalCats = useCatStore((state) => state.total)
  const increaseBigCatPopulation = useCatStore((state) => state.increaseBigCatPopulation)
  const increaseSmallCatPopulation = useCatStore((state) => state.increaseSmallCatPopulation)
  return (
    <div className='box'>
      <h1>Cat Box</h1>
      <div>
        <h3>Big Cats: {bigCats}</h3>
        <h3>Small Cats: {smallCats}</h3>
        {/* <h2>Total Cats: {totalCats}</h2> */}
        <button onClick={increaseBigCatPopulation}>Add Big Cat</button>
        <button onClick={increaseSmallCatPopulation}>Add Small Cat</button>
      </div>
    </div>
  )
}
