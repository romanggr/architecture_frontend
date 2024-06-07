import styled from "styled-components";
import {useState} from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 1100px;

  @media (max-width: 768px) {
    height: 830px;
  }
`;

const Container = styled.div`
  background: url("/home/main-bg.svg") no-repeat center center;
  background-size: cover;
  width: 100%;
  min-height: 100%;

`;

const Content = styled.div`
  width: 60vw;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;

  & > h1 {
    font-family: "Fixel Extra-Bold", serif;
    font-size: clamp(2.0625rem, 1.1382rem + 2.9577vw, 4.6875rem);
  }

  & > p {
    font-size: clamp(1rem, 0.7359rem + 0.8451vw, 1.75rem);
  }

  @media (max-width: 1300px) {
    width: 80vw;
  }

  @media (max-width: 768px) {
    width: 82vw;
    text-align: center;
    top: 2%;
    margin-top: 400px;

    & > p {
      width: 80%;
      margin: 14px auto 0;

    }

    & > h1 {
      margin: 0 auto;
      width: 80%;
    }
  }
`

const Building = styled.div`
  margin-top: 10px;
  background: var(--color-black);
  width: 100%;
  height: 160px;
  display: grid;
  grid-template-columns: 17vw 1fr auto;
  align-items: center;
  gap: 24px;
  padding: 10px 10px 10px 30px;

  & > h2 {
    font-size: clamp(2.1875rem, 1.1458rem + 2.1701vw, 3.75rem);
    font-family: "Fixel Extra-Bold", serif;
  }

  & > p {
    font-size: clamp(0.875rem, 0.5833rem + 0.6076vw, 1.3125rem);
    font-family: "Fixel Light", serif;
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: 19vw 1fr auto;
  }


  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    justify-items: start;
    padding: 14px 0 0 14px;
    text-align: start;
    gap: 0.6rem;
    height: auto;
    margin-top: 2rem;

    & > p {
      font-size: 21px;
      width: 80%;
    }

    & > h2 {
      font-size: 46px;
    }
  }
`

const Eye = styled.div`
  background: var(--color-yellow);
  align-self: end;
  border-radius: 5.5px;
  transition: 0.4s;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: var(--color-white);
  }

  @media (max-width: 768px) {
    justify-self: end;
    border-radius: 0;
  }


`

const Buttons = styled.div`
  margin-top: 1.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`

const TransparentButton = styled.button`
  border: 2px solid var(--color-white);
  background: transparent;
  font-size: 21px;
  font-family: "Fixel Semi-Bold Italic", serif;
  width: 160px;
  height: 50px;
  cursor: pointer;
  transition: 0.4s;


  &:hover {
    border: 2px solid var(--color-yellow);
    background: var(--color-yellow);
    color: var(--color-black);
  }
`

const YellowButton = styled.button`
  border: 2px solid var(--color-yellow);
  background: var(--color-yellow);
  color: var(--color-black);
  font-size: 21px;
  font-family: "Fixel Semi-Bold Italic", serif;
  width: 160px;
  height: 50px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    border: 2px solid var(--color-white);
    background: transparent;
    color: var(--color-white);
  }
`

const text = [
    {
        h2: "Building",
        p: "building entails the construction of structures such as houses, commercial buildings, bridges, and other infrastructural projects",
        id:"building"
    },
    {
        h2: "Landscape Design",
        p: "Interior design focuses on enhancing the interiors of buildings to create aesthetically pleasing and functional spaces. This includes choosing color schemes, furniture, lighting, and accessories, and optimizing layouts to reflect personal or corporate styles.",
        id:"landscape-design"
    },
    {
        h2: "Interior Design",
        p: "Landscape design involves the creation of outdoor spaces, incorporating natural elements like plants, trees, and bodies of water, as well as constructed features such as pathways, patios, and garden structures.",
        id:"interior-design"
    },
]


const Welcome = () => {
    const [currentText, setCurrentText] = useState(0);
    const next = () => {
        if (currentText === text.length - 1) {
            setCurrentText(0);
        } else {
            setCurrentText(prev => prev + 1)
        }
    }
    const prev = () => {
        if (currentText === 0) {
            setCurrentText(text.length - 1);
        } else {
            setCurrentText(prev => prev - 1)
        }
    }
    const scrollToSection = () => {
        document.getElementById(text[currentText].id).scrollIntoView({ behavior: "smooth" });
    };


    return (
        <Wrapper id={"sectionWelcome"}>
            <Container>
                <Content>
                    <h1>Construction at your request</h1>
                    <p>We create unique and cozy interiors and beautiful landscapes</p>
                    <Building>
                        <h2>{text[currentText].h2}</h2>
                        <p>{text[currentText].p}</p>
                        <Eye onClick={scrollToSection}>
                            <img src="/home/eye.svg" alt="eye-icon"/>
                        </Eye>
                    </Building>
                    <Buttons>
                        <TransparentButton onClick={prev}>prev</TransparentButton>
                        <YellowButton onClick={next}>next</YellowButton>
                    </Buttons>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default Welcome;
