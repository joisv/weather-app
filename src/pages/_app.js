import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return (
      <>
        <div className='relative bg-slate-300 w-full h-[105vh]'>
          <Navbar />
          <AnimatePresence initial={ false } node={ "wait" }>
            <Component key={router.pathname} {...pageProps} />
          </AnimatePresence>
        </div>
      </>
    )
}
