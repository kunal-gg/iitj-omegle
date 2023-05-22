import Image from 'next/image'

export default function Home() {
  return (
<main className="w-screen h-screen bg-[#212b42] flex flex-col">
      <section className='text-[#add7ff] flex justify-between px-10 py-5 text-2xl'>
      <p>Welcome, </p>
        <button>Sign out</button>
      </section>
      <hr className='w-11/12 m-auto'/>
      <section className='flex w-screen h-full'>
        <div className='w-2/3 h-full flex justify-start items-center  ml-10'>
        <div className='flex flex-col w-1/2 '>
          <input type="text" className='my-10 bg-primary border-secondary border-4 w-full h-16 px-5 text-primary-text rounded-xl ' placeholder='Enter your interests here:'/>
          <div className='w-full flex flex-row mb-10'>
          <button className='basis-1/2 mx-3  text-[#add7ff] bg-secondary px-10 py-5 rounded-xl'>Start Chat Room</button>
          <button className='basis-1/2 mx-3 text-[#add7ff] bg-secondary px-10 py-5 rounded-xl'>Find Match</button>
          </div>
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
