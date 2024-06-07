import styled, {css} from "styled-components";
import {useState} from "react";

const Container = styled.div`
  color: var(--color-black);
  margin-top: 100px;
`;

const Item = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 30px 30px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-bottom: 4px solid var(--color-black);
  margin-top: 30px;
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s;

  &:hover {
    border-bottom: 4px solid var(--color-yellow);
    background: var(--color-black);

    & h3 {
      color: var(--color-white);
    }
  }

  @media (max-width: 768px) {
    padding: 30px 5px 0;

  }

  ${props => props.active === "true" && css`
    padding: 30px;
    border-bottom: 4px solid var(--color-yellow);
    background: var(--color-black);
  `}
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h3 {
    color: var(--color-black);
    font-size: clamp(1.3125rem, 1.0704rem + 0.7746vw, 2rem);
    transition: color 0.3s;
  }
  

  ${props => props.active === "true" && css`
    & > h3 {
      color: var(--color-white);
    }
  `}
`;

const Img = styled.div`
  height: 50px;
  width: 50px;
  background: url("/home/arrow-down.svg");
  background-size: cover;
  transition: transform 0.3s;

  ${props => props.active === "true" && css`
    transform: rotate(180deg);
  `}
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, height 0.3s ease-in-out;

  ${props => props.active === "true" && css`
    max-height: 1000px;
    height: auto;
    padding-bottom: 1rem;
  `}
  & > p {
    font-size: clamp(1rem, 0.8239rem + 0.5634vw, 1.5rem);
    color: var(--color-white);
  }
`;

const List = () => {
    const [activeItem, setActiveItem] = useState(null);

    const toggleItem = (index) => {
        setActiveItem(activeItem === index ? null : index);
    };

    return (
        <Container>
            <Item onClick={() => toggleItem(1)} active={activeItem === 1 ? "true" : "false"}>
                <Head active={activeItem === 1 ? "true" : "false"}>
                    <h3>Landscape planning</h3>
                    <Img active={activeItem === 1 ? "true" : "false"}/>
                </Head>
                <Body active={activeItem === 1 ? "true" : "false"}>
                    <p>Efficient utilization of space and sustainability are at the heart of our ethos at ArtLine
                        Creations.</p>
                    <p>We specialize in optimizing every inch of your environment while championing eco-friendly
                        practices.</p>
                    <p>Our designs prioritize functionality and environmental consciousness, ensuring that your space
                        not only looks remarkable but also contributes positively to the planet.</p>
                </Body>
            </Item>
            <Item onClick={() => toggleItem(2)} active={activeItem === 2 ? "true" : "false"}>
                <Head active={activeItem === 2 ? "true" : "false"}>
                    <h3>Creating hydrospaces</h3>
                    <Img active={activeItem === 2 ? "true" : "false"}/>
                </Head>
                <Body active={activeItem === 2 ? "true" : "false"}>
                    <p>Efficient utilization of space and sustainability are at the heart of our ethos at ArtLine
                        Creations.</p>
                    <p>We specialize in optimizing every inch of your environment while championing eco-friendly
                        practices.</p>
                    <p>Our designs prioritize functionality and environmental consciousness, ensuring that your space
                        not only looks remarkable but also contributes positively to the planet.</p>
                </Body>
            </Item>
            <Item onClick={() => toggleItem(3)} active={activeItem === 3 ? "true" : "false"}>
                <Head active={activeItem === 3 ? "true" : "false"}>
                    <h3>Design and landscaping of the yard</h3>
                    <Img active={activeItem === 3 ? "true" : "false"}/>
                </Head>
                <Body active={activeItem === 3 ? "true" : "false"}>
                    <p>Efficient utilization of space and sustainability are at the heart of our ethos at ArtLine
                        Creations.</p>
                    <p>We specialize in optimizing every inch of your environment while championing eco-friendly
                        practices.</p>
                    <p>Our designs prioritize functionality and environmental consciousness, ensuring that your space
                        not only looks remarkable but also contributes positively to the planet.</p>
                </Body>
            </Item>
        </Container>
    );
};

export default List;
