import React, { useEffect, useRef } from "react"

export default function Chat() {

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

    // coding the UI of the video chatting system
    return (
        <main className="bg-[#121418] flex h-screen w-screen" >
            <section className="border border-white h-screen w-1/12"></section>
            <section className="border border-white h-screen w-11/12 flex flex-col">
                <section className="border border-primary-text w-full basis-1/12 "></section>
                <section className="border border-primary-text w-full flex-grow flex">
                    <div className="border border-primary-text h-full w-2/3"></div>
                    <ChatBox />
                </section>
            </section>
        </main>
    )
}

export function ChatBox() {
    return (
        <div className="border border-primary-text h-full w-1/3 p-8">
            <div className="bg-primary-text rounded-2xl w-full h-1/6 mb-3 ">
                Hello world
            </div>
            <div className="bg-primary rounded-2xl w-full h-5/6 flex flex-col">
                <div className="bg-primary-text flex h-1/6 rounded-2xl mx-3 my-2">
                    <div className="bg-primary-text"></div>
                    <div className="bg-primary-text"></div>
                </div>
                <div className="flex-grow"></div>
                <div className="bg-primary-text h-1/6 rounded-2xl mx-3 my-2"></div>
            </div>
        </div>
    )
}