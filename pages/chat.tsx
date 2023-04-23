import React, { useEffect, useRef } from "react";

type Offer = {
    sdp: string,
    type: string
}

export default function Chat() {

    const localStream = useRef<HTMLVideoElement | null>(null);
    const remoteStream = useRef<HTMLVideoElement | null>(null);

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
        const media = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        });
        localStream.current != null ? localStream.current.srcObject = media : null;
    }

    

    useEffect(() => {

        // settting up a pperConnection
        const peerConnection = new RTCPeerConnection(servers);

        getLocalMedia();

        // getting the ice candidates from the stun server
        peerConnection.onicecandidate = event => {
            if(event.candidate){
                console.log("this is an iceCandidate", event.candidate);
            }else{
                console.log("No more ice candidates");
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

        const createAnswer = async (offer: any) => {
            const answer = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(answer);
            await peerConnection.setRemoteDescription(offer);

        }

        createOffer();
        

    })
    

    return (
        <main>
            <video ref={localStream} autoPlay muted/>
        </main>
    )
}



