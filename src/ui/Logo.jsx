import styled, {css} from "styled-components";
import {useNavigateTo} from "../hooks/useNavigateTo.jsx";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  & > h3 {
    font-size: 40px;
    font-family: "Fixel Semi-Bold", serif;
    color: var(--color-black);
  }

  & > img {
    width: 60px;
    margin-bottom: 12px;
  }
  

  ${(props) =>
          (props.transparent === "true" || props.isgrey === "true") &&
          css`
            & > h3 {
              color: var(--color-white);
            }
          `}

  ${(props) =>
          props.ismenu === "true" &&
          css`
            & > h3 {
              color: var(--color-black);
            }
          `}
`;

const Logo = ({isMenu, isTransparent, isGrey}) => {
    const navigateTo = useNavigateTo()
    const darkImage = (isMenu || isTransparent === "false") && isGrey === "false";

    return (
        <Container onClick={()=>navigateTo("/")} isgrey={isGrey} transparent={isTransparent} ismenu={isMenu ? "true" : "false"}>
            {darkImage || isMenu ? <img src="/ui/header-logo-dark.svg" alt="logo"/> : <img src="/ui/header-logo.svg" alt="logo"/>}
            {window.innerWidth > 1000 && <h3>Tedo Artline</h3>}
        </Container>
    );
};

export default Logo;