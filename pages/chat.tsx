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

    useEffect(() => {

        // setting up a peerConnection
        const peerConnection = new RTCPeerConnection(servers);

        // getting the local user media
        const getLocalMedia = async () => {
            const media = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            });
            localStream.current != null ? localStream.current.srcObject = media : null;

            // Add the local stream's tracks to the peerConnection
            media.getTracks().forEach(track => {
                peerConnection.addTrack(track, media);
            });
        }

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

        createOffer();

    })

    return (
        <main>
            <video ref={localStream} autoPlay muted/>
        </main>
    )
}
