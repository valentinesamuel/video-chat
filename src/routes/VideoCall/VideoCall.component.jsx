import { useParams } from "react-router-dom";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

import React, { useState } from 'react'
import { VideoCallWrapper } from "./VideoCall.styles";

const VideoCall = () => {
    const { roomID, user } = useParams();

    console.log(user);
    const meeting = async (element) => {
        const appID = Number(import.meta.env.VITE_APP_APPID);
        const serverSecret = import.meta.env.VITE_APP_SERVER_SECRET;
        console.log(appID, serverSecret);
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            Date.now().toString(),
            user.replace(/^\$/, "")
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });
    };
    return (
        <VideoCallWrapper ref={meeting} ></VideoCallWrapper> 
    )
}

export default VideoCall