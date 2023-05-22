'use client'

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/dist/server";


export default function Home() {
  const user = useUser();
  return (
    <main className="w-screen h-screen">
      {!user.isSignedIn ? <Info /> : <LandingPage />}
    </main>
  );
}

function Info() {
  return(
    <main className="w-screen h-screen bg-[#212b42] flex flex-col">
    <section className='text-[#add7ff] flex justify-between px-10 py-5 text-2xl'>
      <h1>IITJ Omegle</h1>
      </section>  
      <div className='flex justify-center items-center grow'>
      <div className=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#82a3c3]">ABOUT US</h5>
       <p className="mb-3 font-normal text-[#82a3c3]"> Omegle is a great way to meet new friends, IITJ omegle is a great 
            way to make connections inside IITJ .
            When you use IITJ Omegle, you are paired randomly with another person from IITJ to talk one-on-one. 
            Hope you have fun!.</p>
            <h5 className="mb-3 font-normal text-[#82a3c3]">Sign in with your IITJ account:</h5>
        <div className="basis-1/2 mx-3 block mb-2 text-[#b3cfeb] text-center bg-[#365fbc] px-5 py-3 rounded-xl">
          <SignInButton />
        </div>
      </div>
      </div>
    </main>
  )
}

const LandingPage = ()=>{
  return(
    <main className="w-screen h-screen bg-[#212b42] flex flex-col">
    <section className='text-[#add7ff] flex justify-between px-10 py-5 text-2xl'>
    <p>Welcome, </p>
      <UserButton />
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
