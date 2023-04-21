import PageFiller from '../../assets/page-filler.svg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import React from 'react'
import { Descrption, Heading, HomeContainer, JoinButton, RoomInput, Image } from './Home.styles';

const Home = () => {
    const [roomCode, setRoomCode] = useState("");
    const [userName, setUserName] = useState("");

    const navigate = useNavigate();

    const submitCode = (e) => {
        e.preventDefault();
        navigate(`/room/${roomCode}/${userName}`);
    };

    return (
        <HomeContainer>
            <div>
                <form
                    onSubmit={submitCode}
                >
                    <Heading>Welcome</Heading>
                    <Descrption>Please enter a room ID to join</Descrption>
                    <RoomInput
                        type="text"
                        required
                        placeholder="Enter Room Code"
                        value={roomCode}
                        onChange={(e) => setRoomCode(e.target.value)}
                    />
                    <br />
                    <RoomInput
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <br />
                    <JoinButton
                        type="submit"
                    >
                        Join the call
                    </JoinButton>
                </form>
            </div>
            <Image>
                <img src={PageFiller} alt="image" />
            </Image>
        </HomeContainer>

    )
}

export default Home