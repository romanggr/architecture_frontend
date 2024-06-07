import styled from "styled-components";

const Container = styled.div`
  width: 89vw;
  margin: 160px auto 0;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  row-gap: 50px;
  column-gap: 150px;
  
  @media(max-width: 950px){
    column-gap: 50px;
  }

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    width: 85vw;
  
  }
`

const Heading = styled.div`
  grid-column: span 2;
  
  & > h2 {
    font-size: clamp(3.0625rem, 1.39rem + 5.3521vw, 7.8125rem);
    font-family: "Fixel Extra-Bold", serif;
    color: var(--color-black);
  }

  & > h3 {
    font-size: 49px;
    font-family: "Fixel Extra-Bold", serif;
    color: var(--color-grey);
    display: none;
  }

  @media (max-width: 768px) {
    grid-column: auto;
    
    & > h3 {
      display: inline;
    }
  }

`

const ImageWrapper = styled.div`
  position: relative;
  width: 40vw;


  img {
    width: 100%;
    display: block;
  }

  &:hover::before {
    opacity: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
    opacity: 1;
    transition: opacity 0.7s ease;
  }

  @media (max-width: 768px) {
    width: 85vw;
    max-width: 500px;
  
  }
  
`;

const PContainer = styled.p`
  align-self: end;

  & > p {
    margin-bottom: 1rem;
    color: var(--color-black);
    font-size: clamp(1.25rem, 0.8319rem + 1.338vw, 2.4375rem);
  }

  @media (max-width: 768px) {
    & > p {
      line-height: 1.6;
    }
  }
`

const Landscaping = () => {
    return (
        <Container>
            <Heading>
                <h2>Landscaping</h2>
                <h3>Mountain Oasis</h3>
            </Heading>
            <ImageWrapper>
                <img src={"/project1/landscaping.svg"} alt={"image"}/>
            </ImageWrapper>
            <PContainer>
                <p>The surrounding area of the house is decorated in a minimalist style, with an emphasis on natural
                    materials. </p>
                <p>A beautiful garden with flowers, trees and bushes creates an atmosphere of coziness and harmony. </p>
                <p>A large terrace with mountain views is an ideal place for outdoor recreation.</p>
            </PContainer>
        </Container>
    );
};

export default Landscaping;