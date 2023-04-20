import PageFiller from '../assets/page-filler.svg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import React from 'react'

const Home = () => {
    const [RoomCode, setRoomCode] = useState("");
    const navigate = useNavigate();

    const submitCode = (e) => {
        e.preventDefault();
        navigate(`/room/${RoomCode}`);
    };

    return (
        <form
            onSubmit={submitCode}
        >
            <div>
                <label >
                    Enter Room Code
                </label>
                <input
                    type="text"
                    required
                    placeholder="Enter Room Code"
                    value={RoomCode}
                    onChange={(e) => setRoomCode(e.target.value)}

                />
            </div>
            <button
                type="submit"
            >
                Go
            </button>
        </form>
    )
}

export default Home