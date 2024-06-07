import styled, {css} from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {useNavigateTo} from "../hooks/useNavigateTo.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 100px);
  justify-content: space-between;

  @media (max-width: 768px) {
    height: calc(100vh - 85px);
  }
`

const PContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 50vw;

  & > p {
    font-size: clamp(1.5rem, 1.1699rem + 1.0563vw, 2.4375rem);
    font-family: "Fixel Semi-Bold Italic", serif;
    color: var(--color-black);
  }

  @media (max-width: 1300px) {
    width: 65vw;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    width: 55vw;
  }

  @media (max-width: 768px) {
    height: 14vh;
    margin-top: 5vh;
    width: 80vw;
  }


`

const Links = styled.nav`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 65vh;
  width: 50vw;

  @media (max-width: 1300px) {
    width: 65vw;
  }

  @media (max-width: 1000px) {
    width: 55vw;
  }

  @media (max-width: 768px) {
    height: 45vh;
    margin-top: 2rem;
    width: 80vw;

  }
`

const StyledLink = styled(Link)`
  font-size: clamp(3.375rem, 1.8125rem + 5vw, 7.8125rem);
  font-family: "Fixel Semi-Bold Italic", serif;
  color: rgba(45, 47, 47, 0.5);
  text-decoration: none;
  position: relative;


  ${props => props.active === "active" && css`
    color: var(--color-black);
    margin-left: 9rem;
    transition: 1s;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: -9rem;
      width: 7rem;
      height: 7rem;
      background: url('/ui/link-arrow.svg') no-repeat center center;
      background-size: contain;
    }

    @media (max-width: 1300px) {
      margin-left: 8rem;

      &:before {
        width: 5rem;
        height: 5rem;
        left: -7rem;

      }
    }

    @media (max-width: 768px) {
      margin-left: 0;
      &:before {
        width: 0;
        height: 0;
      }
    }
  `}
`

const ButtonContainer = styled.div`
  display: flex;
  width: 95vw;
  justify-content: flex-end;

  & > div {
    width: 430px;
    height: 110px;
    background: var(--color-black);
    color: var(--color-yellow);
    font-family: "Fixel Extra-Bold", serif;
    font-size: clamp(1.375rem, 0.9569rem + 1.338vw, 2.5625rem);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }

  @media (max-width: 1300px) {
    width: 100vw;

    & > div {
      width: 100%;
      margin-bottom: 0;

    }
  }
`

const Menu = ({isMenu}) => {
    const location = useLocation();
    const navigateTo = useNavigateTo();
    const isActive = (path) => {
        return location.pathname.includes(path) ? "active" : null;
    };

    const scrollToSection = (sectionId) => {
        navigateTo(`/home?section=${sectionId}`);
    };

    return (
        <Container ismenu={isMenu}>
            <PContainer>
                <p onClick={() => scrollToSection("building")}>Building</p>
                <p onClick={() => scrollToSection("landscape-design")}>Landscape Design</p>
                <p onClick={() => scrollToSection("interior-design")}>Interior Design</p>
            </PContainer>
            <Links>
                <StyledLink active={isActive("home")} to={"home"}>Home</StyledLink>
                <StyledLink active={isActive("about")} to={"about"}>About Us</StyledLink>
                <StyledLink active={isActive("contacts")} to={"contacts"}>Contacts</StyledLink>
            </Links>
            <ButtonContainer>
                <div>Digital Design</div>
            </ButtonContainer>
        </Container>
    );
};

export default Menu;