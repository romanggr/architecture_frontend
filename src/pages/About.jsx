import styled from "styled-components";
import Heading from "../features/about/Heading.jsx";
import Image from "../features/about/Image.jsx";
import Label from "../features/contact/Label.jsx";
import Layer from "../features/about/Layer.jsx";


const Container = styled.div`

`

const P = styled.p`
  width: 90vw;
  margin: 250px auto 100px;
  font-size: clamp(3rem, 1.3055rem + 5.4225vw, 7.8125rem);
  color: var(--color-black);
  font-family: "Fixel Extra-Bold", serif;
  text-align: justify;

  & > span {
    font-family: "Fixel Extra-Bold", serif;
    font-size: clamp(3rem, 1.3055rem + 5.4225vw, 7.8125rem);
    color: var(--color-grey);
  }
`


const About = () => {
    return (
        <Container>
            <Heading/>
            <Image/>
            <P>Crafting Experiences Across <span>Digital</span> and <span>Physical Realms</span></P>
            <Layer/>
        </Container>
    );
};

export default About;