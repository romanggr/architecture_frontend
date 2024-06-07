import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useNavigateTo} from "../../hooks/useNavigateTo.jsx";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 1500px;
  
  @media (max-width: 1200px) {
    height: 1200px;
  }

  @media (max-width: 768px) {
    height: 1400px;
  }
`

const Text = styled.div`
  position: absolute;
  left: 50%;
  top: 400px;
  transform: translate(-50%, -50%);
  width: 1000px;

  & > h2 {
    font-size: clamp(3.6875rem, 2.235rem + 4.6479vw, 7.8125rem);
    font-family: "Fixel Extra-Bold", serif;
    color: var(--color-black);

    display: flex;
    align-items: flex-start;
    gap: 1rem;


  }

  & > p {
    margin-top: -20px;
    font-family: "Fixel Light-Italic", serif;
    color: var(--color-black);
    font-size: clamp(1.25rem, 1.162rem + 0.2817vw, 1.5rem);

    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    width: 750px;
    top: 300px;
  }

  @media (max-width: 900px) {
    width: 650px;
  }

  @media (max-width: 768px) {
    top: 100px;
    width: 90vw;
    margin-top: 50px;
    & img {
      display: none;
    }
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98vw;

  position: absolute;
  left: 50%;
  top: 850px;
  transform: translate(-50%, -50%);

  @media (max-width: 1200px) {
    top: 550px;
  }

  @media (max-width: 768px) {
    top: 650px;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
  }
`

const GreyCircle = styled.img`
  width: 29.2vw;

  @media (max-width: 768px) {
    width: 77vw;
    max-width: 300px;
  }
`

const YellowCircle = styled.img`
  width: 18.3vw;

  @media (max-width: 768px) {
    width: 49vw;
    max-width: 250px;
  }
`

const BlackCircle = styled.div`
  width: 30.5vw;
  position: relative;

  & > img {
    width: 30.5vw;
    position: absolute;
    top: 0;
    left: 0;
  }


  @media (max-width: 768px) {
    width: 81vw;
    max-width: 320px;

    & > img {
      width: 81vw;
      max-width: 320px;
    }
  }
`

const Button = styled.div`
  z-index: 15;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid var(--color-yellow);
  border-radius: 100%;
  width: clamp(3.9375rem, 2.507rem + 4.5775vw, 8rem);
  height: clamp(3.9375rem, 2.507rem + 4.5775vw, 8rem);
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.6s;

  & > p {
    white-space: nowrap;
    font-family: "Fixel Light", serif;
    font-size: clamp(1.5rem, 0.9278rem + 1.831vw, 3.125rem);
    transition: 1s;
  }


  &:hover {
    border: 11px solid var(--color-yellow);

    & > p {
      font-family: "Fixel Semi-Bold Italic", serif;
    }
  }
  
  @media(max-width: 768px){
    top: 200px;
    
  }
`

const LineTop = styled.img`
  position: absolute;
  left: 50%;
  top: -10px;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`

const LineBottom = styled.img`
  position: absolute;
  left: 50%;
  bottom: -10px;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`

const InteriorDesign = ({id}) => {
    const navigateTo = useNavigateTo();
    return (
        <Container id={id}>
            <Text>
                <h2>Interior Design <img src="/ui/yellow-arrow.svg" alt="arrow"/></h2>
                <p>Explore Your Space with Artline Design</p>
            </Text>
            <ImageContainer>
                <GreyCircle src="/home/interior/grey-circle.svg" alt="circle"/>
                <YellowCircle src="/home/interior/yellow-circle.svg" alt="circle"/>
                <BlackCircle>
                    <img src="/home/interior/black-circle.svg" alt="circle"/>
                    <Button onClick={()=>navigateTo("/contacts")}><p>Try new</p></Button>
                </BlackCircle>
            </ImageContainer>
            <LineTop src={"home/interior/line-1.svg"} alt={"line"}/>
            <LineBottom src={"home/interior/line-2.svg"} alt={"line"}/>

        </Container>
    );
};

export default InteriorDesign;