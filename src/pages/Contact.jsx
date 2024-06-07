import styled from "styled-components";
import DesignSelect from "../features/contact/DesignSelect.jsx";
import Form from "../features/contact/Form.jsx";

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  background: var(--color-black);
  z-index: 1;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  grid-template-rows: auto 1fr;
  align-items: start;
  column-gap: 4rem;
  width: 88vw;
  height: auto;
  margin: 100px auto 0;
  padding: 200px 0 100px;
  position: relative;
  

  @media(max-width: 1300px){
    display: flex;
    flex-direction: column;
  }

  @media(max-width: 768px) {
    padding: 120px 0;
    margin: 30px auto 0;

  }
`



const Heading = styled.h1`
  font-size: clamp(3.375rem, 1.8125rem + 5vw, 7.8125rem);
  font-family: "Fixel Extra-Bold", serif;
  grid-column: span 2;
`

const Line = styled.img`
  position: absolute;
  left: 0;
  top: 10vh;
  z-index: -1;
`

const Bg = styled.img`
  position: absolute;
  bottom: 0;
  width: 100vw;
  z-index: -1;

  @media(max-width: 768px){
    display: none;
  }
`

const Contact = () => {
    return (
        <Wrapper>
            <Container>
                <Heading>We are glad to see you</Heading>
                    <DesignSelect/>
                    <Form/>
            </Container>
            <Line src={"/contact/line.svg"} alt={"icon"}/>
            <Bg src={"/contact/bg-img.svg"} alt={"image"}/>
        </Wrapper>
    );
};

export default Contact;