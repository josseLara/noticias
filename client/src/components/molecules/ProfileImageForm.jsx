import { styled } from "styled-components";
import { HiOutlinePhoto } from "react-icons/hi2"
import { AiOutlineLink } from "react-icons/ai"
import Button from "../atoms/Button";
import { useState } from "react";
import InputField from "../atoms/InputField";

function ProfileImageForm({ onSubmitPhoto, onPhotoHandler }) {
    const [photo, setPhoto] = useState("")
    return (
        <Form onSubmit={onSubmitPhoto}>
            <img src={photo.length ? photo : "https://i.pinimg.com/474x/bc/58/35/bc583568c0e3679158f67152f0309c3b.jpg"} alt="photo" />
            <Content>
                <span><AiOutlineLink />Link Imagen</span>
                <InputField onChange={(event) => {
                    onPhotoHandler(event)
                    setPhoto(event.currentTarget.value)
                }} />
            </Content>
            <Button onClick={onSubmitPhoto}>Save</Button>
        </Form>
    );
}

const Form = styled.form`
    width:450px;
    height: 200px;
    padding: 4px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-content: center;
    align-items: center;
    gap: 10px;
    position: absolute;
    background-color: #0d1117;
    border-radius: 10px;

    @media screen and (max-width:700px) {
        width: 340px;

        img{
            width: 100px;
            height: 100px;
            margin-left: 20px;
        }
    }
    `;

const Content = styled.div`
    position: relative;
    width: 250px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    input{
        width: 200px;
        font-size: .8rem;
        font-weight: 500;
        @media screen and (max-width:700px) {
            width: 150px;
         }
    }
    span{
        display: flex;
        align-items: center;
        gap: 6px;
        svg{
            position: relative;
            left: 0;
            top: 0;
            padding: 4px;
        }
    }
    
`;
export default ProfileImageForm;