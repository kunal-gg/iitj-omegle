import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-[#0e1322] text-white h-screen w-screen">
      <section className='flex flex-row justify-between py-5 px-10'>
        <h1 className=''>IITJ Omegle</h1>
        <h1 className=''>Kunal Tiwari</h1>
      </section>
      <hr className='w-11/12 px-10 m-auto'/>
      <button className='border border-white border-1px px-10 py-5 '>Connect</button>
    </main>
  )
}
