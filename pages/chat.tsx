import React, { useEffect, useRef } from "react"

export default function Chat(){

    const mystream = useRef<HTMLVideoElement>(null); //Your video

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(
            stream => mystream.current!= undefined ? mystream.current.srcObject = stream : null
        ).catch(error => {
            console.log(error);
            
        })
    }, [])

    return(  
        <main>		
            <video ref={mystream} muted autoPlay  className="w-80 h-80"/>
        </main>
    )
}
