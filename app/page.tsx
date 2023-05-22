'use client'

import { SignInButton, UserButton } from "@clerk/nextjs";


export default function Info() {
  return (
    <main className="w-screen h-screen bg-[#212b42] flex flex-col">
    <section className='text-[#add7ff] flex justify-between px-10 py-5 text-2xl'>
      <h1>IITJ Omegle</h1>
      </section>  
      <div className='flex justify-center'>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
  );
}
