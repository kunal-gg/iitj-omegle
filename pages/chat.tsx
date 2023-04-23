import React, { useEffect, useRef } from "react";

export default function Chat() {

    const localStream = useRef<HTMLMediaElement | null>(null);
    const remoteStream = useRef<HTMLMediaElement | null>(null);

    // config of the stun servers
    const servers = { 
        iceServers: [
            {
                urls: ["stun:stun.l.google.com:19302"]
            }
        ]
    }


    // getting the local user media
    const getLocalMedia = async () => {
        const media = await navigator.mediaDevices.getUserMedia();
        localStream.current != null ? localStream.current.srcObject = media : null;
    }

    

    useEffect(() => {

        // settting up a pperConnection
        const peerConnection = new RTCPeerConnection(servers);

        getLocalMedia();

        // getting the ice candidates from the stun server
        peerConnection.onicecandidate = event => {
            if(event.candidate){
                console.log(event.candidate);
            }
        }

        // creating an offer 
        const createOffer = async () => {
            const offer = await peerConnection.createOffer();
            await peerConnection.setLocalDescription(offer);

            const offerObject = {
                sdp: offer.sdp,
                type: offer.type
            }

            console.log(offerObject);
        }

        createOffer();
        

    })
    

    return (
        <main>
            <video ref={localStream} autoPlay muted/>
        </main>
    )
}



