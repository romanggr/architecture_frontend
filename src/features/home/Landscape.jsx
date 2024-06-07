import styled from "styled-components";
import List from "./List.jsx";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;

`

const Container = styled.div`
  padding-top: 200px;
  margin: 0 auto;
  width: 83vw;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 90vw;
  }
  @media (max-width: 900px) {
    width: 95vw;
  }

  @media (max-width: 768px) {
    width: 87vw;
    flex-direction: column;
    margin-top: 50px;
  }
  @media (max-width: 450px) {
    margin-top: 140px;
  }
`

const Left = styled.div`
  width: 80%;

  & > h2 {
    font-size: clamp(3.6875rem, 2.235rem + 4.6479vw, 7.8125rem);
    color: var(--color-black);
    font-family: "Fixel Extra-Bold", serif;
  }

  @media (max-width: 768px) {
    width: 87vw;
  }
`


const Right = styled.div`
  width: 42vw;


  @media (max-width: 1000px) {
    width: 60vw;
  }

  @media (max-width: 768px) {
    position: relative;
    height: 110vw;
    width: 83vw;
  }
`


const PContainer = styled.div`
  width: 100%;

  & > p {
    color: var(--color-black);
    font-size: 28px;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 65vw;
    height: 60vw;


    & > p {
      color: var(--color-white);
      font-family: "Fixel Light",serif;
      font-size: clamp(1.625rem, 0.6324rem + 4.4118vw, 2.75rem);
    }
  }

  @media (max-width: 420px) {
    height: 40vw;
    width: 85%;
  
  }
`

const Img = styled.div`
  margin-top: 100px;
  position: relative;
  width: 100%;
  height: 40vw;
  background-image: url('/home/landscape-img-active.svg');
  background-size: cover;
  background-position: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/home/landscape-img.svg');
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  &:hover:before {
    opacity: 1;
  }

  @media (max-width: 1200px) {
    height: 50vw;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 87vw;
    height: 100%;

    &:before {
      opacity: 1;
    }
  }
`;

const Line1 = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: -1;

  @media (max-width: 1200px) {
    display: none;
  }

`
const Line2 = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;

  @media (max-width: 1200px) {
    display: none;
  }
`
const Line3 = styled.img`
  position: absolute;
  right: 0;
  bottom: 30%;
  z-index: -1;

  @media (max-width: 1200px) {
    display: none;
  }
`

const ListContainer = styled.div`
  width: 580px;

  @media (max-width: 1200px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }
`


const Landscape = ({id}) => {
    return (
        <Wrapper id={id}>
            <Container>
                {window.innerWidth > 768 ? <>
                        <Left>
                            <h2>Landscape Design <img src="/ui/yellow-arrow.svg" alt="arrow-icon"/></h2>
                            <ListContainer>
                                <List/>
                            </ListContainer>

                        </Left>
                        <Right>
                            <PContainer>
                                <p>Our landscape designs reflect your desires and style.</p>
                                <p>We develop exquisite designs for your yard, paying special attention to aesthetics and
                                    functionality.</p>
                            </PContainer>
                            <Img/>
                        </Right>
                    </> :
                    <>
                        <Left>
                            <h2>Landscape Design <img src="/ui/yellow-arrow.svg" alt="arrow-icon"/></h2>
                        </Left>
                        <Right>
                            <PContainer>
                                <p>Our landscape designs reflect your desires and style.</p>
                                <p>We develop exquisite designs for your yard, paying special attention to aesthetics and
                                    functionality.</p>
                            </PContainer>
                            <Img/>
                        </Right>
                        <ListContainer>
                            <List/>
                        </ListContainer>
                    </>}

            </Container>
            <Line1 src={"/home/landscape-line-1.svg"} alt={"line"}/>
            <Line2 src={"/home/landscape-line-2.svg"} alt={"line"}/>
            <Line3 src={"/home/landscape-line-3.svg"} alt={"line"}/>
        </Wrapper>
    );
};

export default Landscape;