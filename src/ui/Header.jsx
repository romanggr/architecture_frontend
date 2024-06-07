import styled, {css, keyframes} from "styled-components";
import Logo from "./Logo.jsx";
import Burger from "./Burger.jsx";
import {useBurger} from "../context/BurgerContext.jsx";
import {useTouchSection} from "../hooks/useTouchSection.jsx";
import Menu from "./Menu.jsx";
import {useLocation} from "react-router-dom";
import {useNavigateTo} from "../hooks/useNavigateTo.jsx";


const slideIn = keyframes`
  0% {
    height: 100px;

  }
  100% {
    height: 100vh;
  }
`;

const slideOut = keyframes`
  0% {
    height: 100vh;
  }
  100% {
    height: 100px;
  }
`;


const Wrapper = styled.div`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  overflow: hidden;
  background: #E5E3DF;

  @media (max-width: 768px) {
    height: 85px;
  
  }


  ${props => props.transparent === "true" && css`
    background: transparent;
  `}

  ${props => props.isgrey === "true" && css`
    background: var(--color-black);
  `}


  ${props => props.ismenu === "true" && css`
    background: var(--color-yellow);
    height: 100vh;
    animation: ${slideIn} 0.4s;
  `}

  ${props => props.ismenu === "false" && props.isinitialmount === "true" && css`
      //animation: ${slideOut} 0.4s;
    height: 100px;
  `}

`

const Container = styled.header`
  margin: 0 auto;
  width: 95vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 92vw;
    height: 85px;
  }
`

const Contact = styled.div`
  margin-left: 3rem;
  background: var(--color-yellow);
  width: 350px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: -60%;
  transform: translate(-50%, 0);
  transition: 0.5s;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    color: var(--color-black);
    font-family: "Fixel Semi-Bold", serif;
    font-size: 32px;
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    top: 0;

    & > p {
      opacity: 1;
    }
  }
  
  @media(max-width: 1000px){
    margin-left: 0;
  }
`

const Header = () => {
    const {isScrolled} = useTouchSection({sectionName: "sectionWelcome"});
    const {isOpenBurger, isInitialMount} = useBurger();
    const location = useLocation();
    const navigateTo = useNavigateTo();

    const isHome = location.pathname.includes("home") ? "true" : "false";
    const transparent = (isScrolled && !isOpenBurger && location.pathname.includes("home")) ? "true" : "false";
    const isGrey = location.pathname.includes("contacts") ? "true" : "false"

    return (
        <Wrapper ismenu={isOpenBurger ? "true" : "false"}
                 transparent={transparent}
                 isinitialmount={isInitialMount}
                 isgrey={isGrey}>
            <Container>
                <Logo isTransparent={transparent} isGrey={isGrey} isMenu={isOpenBurger}/>
                {(window.innerWidth > 768 && isHome === "true" && !isOpenBurger)
                    &&
                    <Contact onClick={()=>navigateTo("contacts")}>
                        <p>Contact with us</p>
                    </Contact>
                }
                <Burger isGrey={isGrey} isTransparent={transparent}/>
            </Container>
            <Menu isMenu={isOpenBurger ? "true" : "false"}/>
        </Wrapper>
    );
};

export default Header;