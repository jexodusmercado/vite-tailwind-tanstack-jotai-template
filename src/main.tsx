import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createIDBPersister } from './lib/persistor.ts'
import { QueryClient } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen.ts'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
})

const persistor = createIDBPersister()

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{
                persister: persistor,
            }}
        >
            <RouterProvider router={router} />
        </PersistQueryClientProvider>
    </React.StrictMode>,
)
