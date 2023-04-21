import PageFiller from '../../assets/page-filler.svg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import React from 'react'
import { Descrption, Heading, HomeContainer, JoinButton, RoomInput, Image } from './Home.styles';

const Home = () => {
    const [RoomCode, setRoomCode] = useState("");
    const navigate = useNavigate();

    const submitCode = (e) => {
        e.preventDefault();
        navigate(`/room/${RoomCode}`);
    };

    return (
        <HomeContainer>
            <div>
                <p>{import.meta.env.VITE_APP_APPID}
                </p>
                <p>
                    {import.meta.env.VITE_APP_SERVER_SECRET}</p>
                <form
                    onSubmit={submitCode}
                >
                    <Heading>Welcome</Heading>
                    <Descrption>Please enter a room ID to join</Descrption>

                    <RoomInput
                        type="text"
                        required
                        placeholder="Enter Room Code"
                        value={RoomCode}
                        onChange={(e) => setRoomCode(e.target.value)}

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