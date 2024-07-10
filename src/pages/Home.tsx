import { createSignal } from 'solid-js'

export default function Home() {

  const [count, setCount] = createSignal(0)
  const [double, setDouble] = createSignal(1)

  return (
        <div class="text-center mx-auto h-screen bg-black text-white">
            <h1 class="text-5xl font-bold mb-4">Vite + Solid</h1>
            <div class="flex justify-around w-1/2 mx-auto">
                <button class="button border-red-500 border-2 p-3 " onClick={() => setCount((count) => count + 1)}>
                    count is {count()}
                </button>

                <button class="button border-green-500 border-2 p-3" onClick={() => setDouble((double) => double * 2)}>
                    click to double {double()}
                </button>
            </div>
        </div>
  )
}
