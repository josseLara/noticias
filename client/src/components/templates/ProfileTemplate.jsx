import { styled } from "styled-components";
import Layout from "./Layout";
import ProfileCard from "../molecules/ProfileCard";
import InfoProfile from "../molecules/InfoProfile";
import Button from "../atoms/Button";
import { BsSave } from 'react-icons/bs';

function ProfileTemplate({ sideBarData, tobBarData, inputFileParam, userData, onUpdateUserHandler,onSubmitPhoto,onPhotoHandler,
    onToggleFormPhotoHandler,toggleFormPhoto }) {
    return (

        <Layout sideBarData={sideBarData} tobBarData={tobBarData}>
            <Content>
                <ProfileCard userData={userData} onSubmitPhoto={onSubmitPhoto} 
                onPhotoHandler={onPhotoHandler} onToggleFormPhotoHandler={onToggleFormPhotoHandler}
                toggleFormPhoto={toggleFormPhoto}/>
                <InfoProfile inputFileParam={inputFileParam} />
                <Button type="submit" onClick={onUpdateUserHandler}>
                    <BsSave />
                    Save Changes
                </Button>
            </Content>
        </Layout>

    );
}

// 

const Content = styled.div`
       width: 100%;
       height: 89vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
       overflow-y:scroll;
       margin-top: 20px;
        @media (max-width:700px) {
          height: 75vh;
        }
`

export default ProfileTemplate;