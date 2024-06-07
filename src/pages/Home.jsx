import styled from "styled-components";
import Welcome from "../features/home/Welcome.jsx";
import Contact from "../features/home/Contact.jsx";
import Trust from "../features/home/Trust.jsx";
import Projects from "../features/home/Projects.jsx";
import Building from "../features/home/Building.jsx";
import Landscape from "../features/home/Landscape.jsx";
import Touch from "../features/home/Touch.jsx";
import InteriorDesign from "../features/home/InteriorDesign.jsx";
import VerticalProjects from "../features/home/VerticalProjects.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";


const Container = styled.div`

`;

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const sectionId = params.get('section');
        if (sectionId) {
            const section = document.getElementById(sectionId);
            section?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);


    return (
        <Container>
            <Welcome/>
            <Contact/>
            <Trust/>
            {window.innerWidth <= 768 ? <VerticalProjects/> : <Projects/>}
            <Building id="building"/>
            <Landscape id="landscape-design"/>
            <Touch/>
            <InteriorDesign id="interior-design"/>
        </Container>
    );
};

export default Home;
