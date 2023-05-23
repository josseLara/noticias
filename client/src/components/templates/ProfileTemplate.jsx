import { styled } from "styled-components";
import Layout from "./Layout";

import ProfileCard from "../molecules/ProfileCard";
import InfoProfile from "../molecules/InfoProfile";
import Button from "../atoms/Button";
import {BsSave} from 'react-icons/bs';

function ProfilePageTemplate() {
    return (

        <Layout>
            <Content>
                <ProfileCard/>
                <InfoProfile/>

                <Button>
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

export default ProfilePageTemplate;