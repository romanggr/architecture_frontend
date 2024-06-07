import styled, {css} from "styled-components";
import {useState} from "react";

const Container = styled.div`
  width: 100%;
  display: grid;
  row-gap: 10px;
  column-gap: 1rem;
  transition: 1s;
  grid-template-rows: auto 1fr;


  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  ${props => props.designer === "interior" && css`
    grid-template-columns: 1.5fr 1fr 1fr;
  `}

  ${props => props.designer === "landscape" && css`
    grid-template-columns: 1fr 1.5fr 1fr;
  `}

  ${props => props.designer === "building" && css`
    grid-template-columns: 1fr 1fr 1.5fr;
  `}

  
`;

const P = styled.p`
  grid-column: span 3;
  color: var(--color-white);
  font-size: clamp(2.125rem, 1.9269rem + 0.6338vw, 2.6875rem);
  font-family: "Fixel Semi-Bold", serif;
  margin-top: 100px;
`;

const Item = styled.div`
  position: relative;
  width: auto;
  height: 350px;
  background: url(${props => props.background}) center center no-repeat;
  border: 2px solid var(--color-white);

  &:before {
    transition: 1s;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-yellow);
    opacity: 0;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);

  }

  & > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Fixel Light", serif;
    font-size: clamp(1.25rem, 1.0299rem + 0.7042vw, 1.875rem);
    width: 80%;
    text-align: center;
    z-index: 1;
  }

  & > h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(2.875rem, 2.4349rem + 1.4085vw, 4.125rem);
    font-family: "Fixel Semi-Bold", serif;
    color: var(--color-black);
    opacity: 0;
    transition: 1s;
    
  }


  @media(max-width: 768px) {
    background-size: cover;
    height: 140px;
    width: 80%;
  }


  ${(props) => props.active === "true" && css`
    width: 100%;

    &:before {
      opacity: 1;
    }

    &:after {
      opacity: 0;
    }
    
    & > h3 {
    opacity: 1;
    }

    @media(max-width: 768px) {
      width: 100%;
    }
  `}
`;

const DesignSelect = () => {
    const [designer, setDesigner] = useState("building");

    return (
        <Container designer={designer}>
            <P>Are you looking for..?</P>
            <Item
                background={"/contact/interior.svg"}
                onClick={() => setDesigner("interior")}
                active={designer === "interior" ? "true" : "false"}>
                {designer === "interior" ? <h3>Building</h3> : <p>Interior Design</p> }
            </Item>
            <Item
                background={"/contact/landscape.svg"}
                onClick={() => setDesigner("landscape")}
                active={designer === "landscape" ? "true" : "false"}>
                {designer === "landscape" ? <h3>Building</h3> : <p>Landscape Design</p> }
            </Item>
            <Item
                background={"/contact/building.svg"}
                onClick={() => setDesigner("building")}
                active={designer === "building" ? "true" : "false"}>
                {designer === "building" ? <h3>Building</h3> : <p>Building Design</p> }
            </Item>
        </Container>
    );
};

export default DesignSelect;
