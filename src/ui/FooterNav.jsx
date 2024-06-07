import styled from "styled-components";
import {useNavigateTo} from "../hooks/useNavigateTo.jsx";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media(max-width: 1000px){
    margin-left: 1rem;
    gap: 2rem;
  }
`

const StyledLink = styled.p`
  font-family: "Fixel Light-Italic", serif;
  font-size: clamp(2.1875rem, 1.8574rem + 1.0563vw, 3.125rem);
  text-decoration: none;
  transition: 0.5s;
  
  &:hover{
    color: var(--color-yellow);
  }
`

const FooterNav = () => {
    const navigateTo = useNavigateTo();
    return (
        <Nav>
            <StyledLink onClick={()=>navigateTo("/home")}>Home</StyledLink>
            <StyledLink onClick={()=>navigateTo("/about")}>About Us</StyledLink>
            <StyledLink onClick={()=>navigateTo("/contacts")}>Contacts</StyledLink>
        </Nav>
    );
};

export default FooterNav;