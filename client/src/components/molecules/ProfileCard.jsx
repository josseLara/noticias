import { styled } from "styled-components";
import Title from "../atoms/Title";
import {RiImageEditLine} from 'react-icons/ri'
import ProfileImageForm from "./ProfileImageForm";
import { useContext } from "react";
import { ProfileContext } from "../../context/Profile/ProfileContext";
function ProfileCard() {
    const {userData,onSubmitPhoto,onPhotoHandler,onToggleFormPhotoHandler,toggleFormPhoto} = useContext(ProfileContext);

    return ( 
        <Card>

            <ProfileImagen>
                <img src={userData?.photo ?? "https://i.pinimg.com/474x/b1/46/5a/b1465ad2c4cd89390b534ab9853df939.jpg"} alt="photo" />
                <RiImageEditLine onClick={onToggleFormPhotoHandler}/>
               {toggleFormPhoto && <ProfileImageForm onSubmitPhoto={onSubmitPhoto} onPhotoHandler={onPhotoHandler}/>}
            </ProfileImagen>

            <Description>
                <Title>{userData?.name ?? ""}</Title>
                <span>{userData?.email ?? ""}</span>
            </Description>
        </Card>
     );
}

const Card = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const ProfileImagen = styled.div`
    width: fit-content;
    height: fit-content;
    position: relative;

    img{
        width: 120px;
        height: 120px;
        border-radius: 100%;
        object-fit: cover;
    }

    svg{
        background: #ee7234;
        padding: 5px;
        border-radius: 100%;
        color: #000;
        position: absolute;
        right: 1px;
        bottom: 10px;
    }
`;
const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    h1{
        font-size: 1.7rem;
    }

    span{
        font-size: large.9rem;
        font-weight: 400;
        color: #ffffff9a;
    }
`;
export default ProfileCard;