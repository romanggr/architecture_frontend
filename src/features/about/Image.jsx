import styled from "styled-components";

const Container = styled.div`
  width: 90vw;
  margin: 15vw auto 0;
  overflow: hidden;

  & > img {
    width: 100%;
  }
  
  @media(max-width: 768px){
    width: 100vw;

    & > img {
      width: 167vw;
      margin-left: -33.5vw;
    }
  }
`
const Image = () => {
    return (
        <Container>
            <img src="/about/about-bg.svg" alt="image"/>
        </Container>
    );
};

export default Image;