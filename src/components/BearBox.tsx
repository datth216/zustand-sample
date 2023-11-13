import { useBearStore } from '../stores/bearStore'

export default function BearBox() {
  const bears = useBearStore((state) => state.bears)
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  const removeAllBears = useBearStore((state) => state.removeAllBears)
  return (
    <div className='box'>
      <h1>Bear Box</h1>
      <div>
        <h3>Bears: {bears}</h3>
        <button onClick={increasePopulation}>Add bear</button>
        <button onClick={removeAllBears}>Remove bear</button>
      </div>
    </div>
  )
}
