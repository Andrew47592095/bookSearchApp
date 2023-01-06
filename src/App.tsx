import { useState } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useQuery, QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './App.css'
import { ReactQuery } from './query/ReactQuery';
import { Header } from './components/Header';

const queryClient = new QueryClient()

function App() {
  console.log(import.meta.env.VITE_API_KEY);

  return (
    <QueryClientProvider client={queryClient} >
      <div className='App'>
        <Header />
        <ReactQuery />
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  )
}

export default App;
