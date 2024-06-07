import styled from "styled-components";
import {useNavigateTo} from "../../hooks/useNavigateTo.jsx";


const Container = styled.div`
  margin-top: 100px;
  background: var(--color-black);
  width: 100vw;
  height: 80vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 250px;
    height: 120vw;
  }

  @media (max-width: 500px) {
    height: 180vw;
  }
`;

const ImgContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 46vw;
  height: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("/home/touch-img.svg") center center no-repeat;
  background-size: cover;
  z-index: 10;

  @media (max-width: 768px) {
    width: 72vw;
    height: 100vw;
  }

  @media (max-width: 500px) {
    width: 82vw;
    height: 120vw;
  }
`;

const Btn = styled.button`
  width: 22vw;
  height: 5.2vw;

  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);

  border: 3px solid var(--color-white);
  border-radius: 200px;
  background: transparent;
  color: var(--color-yellow);
  font-size: clamp(1.1875rem, -0.0625rem + 2.6042vw, 3.0625rem);
  font-family: "Fixel Light", serif;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  padding-top: 6px;

  &:hover {
    background: var(--color-yellow);
    border: 3px solid var(--color-yellow);
    color: var(--color-black);
    font-family: "Fixel Semi-Bold", serif;
  }

  @media (max-width: 768px) {
    width: 40vw;
    height: 10vw;
  }

  @media (max-width: 500px) {
    width: 60vw;
    height: 20vw;
  }
`;

const Text = styled.div`
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85vw;
  color: var(--color-white);
  font-size: clamp(1.875rem, -0.5833rem + 5.1215vw, 5.5625rem);
  z-index: 12;
  text-align: justify;

  @media (max-width: 768px) {
    top: 33%;
  }
`;

const Touch = () => {
    const navigateTo = useNavigateTo();

    return (
        <Container>
            <ImgContainer>
                <Btn onClick={() => navigateTo("/contacts")}>Get in touch</Btn>
            </ImgContainer>
            <Text>By immersing ourselves in your space, we gain invaluable insight into your vision, enabling us to
                conceptualize and craft the ideal kitchen tailored to your desires.</Text>
        </Container>
    );
};

export default Touch;
