import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-screen h-screen relative flex justify-center items-center text-white hero-gradient'>
     
    
    <div className='w-full max-w-[600px] mx-auto
    '>
      <h1 className='text-6xl mb-4'>Best Journal App</h1>
      <p className='text-2xl text-white/60 mb-4 '>This is the best mood tracking app you'll find . All you have to do is to be honest.
        
         </p>
      <div>
        <Link href='/journal'>
        <button className='bg-white text-black px-3 py-2 rounded-lg active:scale-100 hover:scale-105'>
          Get started
        </button>
        </Link>
       
      </div>
    </div>
    </main>
  )
}
