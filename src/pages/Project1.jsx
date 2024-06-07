import styled from "styled-components";
import Welcome from "../features/project1/Welcome.jsx";
import Description from "../features/project1/Description.jsx";
import Landscaping from "../features/project1/Landscaping.jsx";
import ProjectSwiper from "../ui/ProjectSwiper.jsx";
import Text from "../features/project1/Text.jsx";

const Container = styled.div`
  margin-bottom: 10rem;

`

const images = [
    'photo_1_2024-05-30_11-38-02.jpg',
    'photo_2_2024-05-30_11-38-02.jpg',
    'photo_3_2024-05-30_11-38-02.jpg',
    'photo_4_2024-05-30_11-38-02.jpg',
    'photo_5_2024-05-30_11-38-02.jpg',
    'photo_6_2024-05-30_11-38-02.jpg',
    'photo_7_2024-05-30_11-38-02.jpg',
    'photo_8_2024-05-30_11-38-02.jpg',
];

const Project1 = () => {
    return (
        <Container>
            <Welcome/>
            <Description/>
            <Landscaping/>
            <ProjectSwiper images={images}/>
            <Text/>
        </Container>
    );
};

export default Project1;