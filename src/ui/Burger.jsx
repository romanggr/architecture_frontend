import styled, {css} from "styled-components";
import {useBurger} from "../context/BurgerContext.jsx";

const StyledBurgerContainer = styled.div`
  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const StyledBurger = styled.div`
  width: 70px;
  height: 4px;
  border-radius: 1rem;
  background: var(--color-white);
  position: relative;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &::before {
    content: "";
    width: 35px;
    height: 4px;
    border-radius: 1rem;
    background: var(--color-white);
    position: absolute;
    top: 12px;
    right: 0;
    transition: top 0.3s ease, transform 0.3s ease;

  }

  &::after {
    content: "";
    width: 35px;
    height: 4px;
    border-radius: 1rem;
    background: var(--color-white);
    position: absolute;
    top: 8px;
    right: 0;
    visibility: hidden;
    transition: top 0.3s ease, transform 0.3s ease;
  }

  ${({isactive}) => isactive === "true" && css`
    background-color: var(--color-black);

    &::before {
      transform: rotate(-125deg);
      background-color: var(--color-black);
      top: 24px;
      right: -5px;
      border-radius: 1rem;
    }

    &::after {
      visibility: visible;
      transform: rotate(-125deg);
      background-color: var(--color-black);
      top: 24px;
      right: 25px;

      border-radius: 1rem;
    }
  `}

  ${props => (props.isgrey === "false") && css`
    background-color: var(--color-black);

    &::before {
      background-color: var(--color-black);
    }

    &::after {
      background-color: var(--color-black);
    }
  `}

`;

function Burger({isTransparent,isGrey}) {
    const {toggleBurger, isOpenBurger} = useBurger()
    const grey = isGrey=== "true" ? "true" : isTransparent

    return (
        <StyledBurgerContainer onClick={toggleBurger}>
            <StyledBurger isgrey={grey} isactive={isOpenBurger ? "true" : "false"}/>
        </StyledBurgerContainer>
    );
}

export default Burger;