import styled from "styled-components";

export const HomeContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-left:12rem;
`

export const JoinButton = styled.button`
padding:8px;
color:white;
background-color:teal;
font-size:1rem;
border:none;
padding: .625rem 1.25rem;
margin: 1.25rem 0;
`

export const RoomInput = styled.input`
padding: .625rem;
border:none;
font-size:1rem;
margin-top:.625rem;
border: 1px solid teal;
border-radius:5px;
`

export const Heading = styled.h1`
font-size:8rem;
color:black;
`

export const Descrption = styled.p`
font-size: 1.25rem;
`

export const Image = styled.div`
    width: 60%;
    height: 100vh;
;
img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
`