import { motion as m } from 'framer-motion'

export default function About(){
    return (
        <main>
            <div className='flex flex-wrap justify-center'>
                <m.div 
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ opacity: 1 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="absolute w-full bg-orange-300 min-h-[105vh] p-3 mb-10 max-w-screen-sm mx-auto"
                >
                        <h1 className="text-center">About</h1>    
                </m.div>
            </div>
        </main>
    )
}