import { createFileRoute } from '@tanstack/react-router'
import { atomWithStorage } from 'jotai/utils'
import { Button } from '@/components/ui/button'
import { useAtom } from 'jotai'

const countAtom = atomWithStorage('count', 0, undefined, { getOnInit: true })

export const Route = createFileRoute('/')({
    component: App,
})

export function App() {
    const [count, setCount] = useAtom(countAtom)

    return (
        <main className="flex justify-center items-center h-screen flex-col">
            <span className="font-bold">
                Template for vite-pwa jotai tanstack router tanstack query
                tailwindcss and default shadcn
            </span>
            <Button onClick={() => setCount((count) => count + 1)}>
                count is: {count}
            </Button>
        </main>
    )
}
