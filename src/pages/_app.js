import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return (
      <>
        <div className='max-w-screen-sm mx-auto relative'>
          <Navbar />
          <AnimatePresence initial={ false } node={ "wait" }>
            <Component key={router.pathname} {...pageProps} />
          </AnimatePresence>
        </div>
      </>
    )
}
