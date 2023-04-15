import React, { useEffect, useRef } from "react"
import { BiChevronLeft} from "react-icons/bi";
import { BsFillPersonFill, BsBellFill } from "react-icons/bs"

export default function Chat() {



    // coding the UI of the video chatting system
    return (
        <main className="bg-[#121418] flex h-screen w-screen" >
            <section className="h-screen w-1/12">
                <SideNav />
            </section>
            <section className="h-screen w-11/12 flex flex-col">
                <section className="w-full basis-1/12 ">
                    <Nav />
                </section>
                <section className="w-full flex-grow flex">
                    <div className="h-full w-2/3">
                        <Video />
                    </div>
                    <ChatBox />
                </section>
            </section>
        </main>
    )
}

// The side Nav

export function SideNav() {
    return(
        <main className="bg-[#1c1e25] w-full h-full">

        </main>
    )
}

// Top Nav
export function Nav(){
    return (
        <main className="flex justify-between w-full h-full items-center px-10">
            <div className="basis-1/2">
                <button className="pr-5 py-1 mx-1 text-xl text-white"><BiChevronLeft/></button>
                <input type="text" placeholder="Search" className="w-3/4 bg-[#1c1e25] px-3 py-2 mt-2 rounded-xl" />
            </div>
            <div className="flex">
                <BsFillPersonFill className="text-white mx-2 text-xl"/>
                <BsBellFill className="text-white mx-2 text-xl"/>

            </div>
        </main>
    )
}

// The Video Coomponent
export function Video() {
    const mystream = useRef<HTMLVideoElement>(null); //Your video

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(
            stream => mystream.current != undefined ? mystream.current.srcObject = stream : null
        ).catch(error => {
            console.log(error);

        })
    }, [])
    return (
        <main>
            <video className="h-full w-full"  ref={mystream} autoPlay={true} muted={true} />
        </main>
    )
}
// stpes needed to be done
// 1. Create a video element 
// 2. Seperate out that Input Box
// 3. Clean up the code 

export function ChatBox() {
    return (
        <div className="h-full w-1/3 p-8">
            <div className="bg-[#5553d3] text-white rounded-2xl w-full h-1/6 mb-3 ">

            </div>
            <div className="bg-[#1c1e25] rounded-2xl w-full h-5/6 flex flex-col">
                <div className="bg-[#23252e] flex h-1/6 rounded-2xl mx-3 my-3">
                    <div className=""></div>
                    <div className=""></div>
                </div>
                <div className="flex-grow"></div>
                <div className="bg-[#23252e]  h-1/6 rounded-2xl mx-3 my-3 flex flex-row item-center">
                    <button>Attach</button>
                    <input type="text" placeholder="Write Your Message Here" className="h-1/2 m-auto flex-grow" />
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}