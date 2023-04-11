import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-screen h-screen bg-[#212b42] flex flex-col">
      <section className='text-[#add7ff] flex justify-between px-10 py-5 text-2xl'>
        <h1>IITJ Omegle</h1>
        <h1>Kunal Tiwari</h1>
      </section>
      <hr className='w-11/12 m-auto'/>
      <section className='flex w-screen h-full'>
        <div className='w-2/3 h-full flex flex-col'>
          <input type="text" className='bg-primary border-secondary border-4 w-1/2 h-16 px-5 text-primary-text mx-10 rounded-xl' placeholder='Enter your interests here:'/>
          <div className='w-1/3 flex flex-row'>
          <button className='w-full text-[#add7ff] bg-secondary px-10 py-5 rounded-xl'>Start Chat Room</button>
          <button className='w-full text-[#add7ff] bg-secondary px-10 py-5 rounded-xl'>Find Match</button>
          </div>

        </div>
        <div className='border-l border-white w-1/3 h-full flex flex-col justify-evenly items-center'>
          <h1 className='text-[#add7ff] text-2xl self-start px-10 font-bold'>Chat Rooms</h1>
          <div className=' w-64 h-64 rounded-3xl bg-[#1b2334]'></div>
          <div className=' w-64 h-64 rounded-3xl bg-[#1b2334]'></div>
        </div>
      </section>
    </main>
  )
}
