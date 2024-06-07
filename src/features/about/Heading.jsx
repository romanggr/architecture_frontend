import styled from "styled-components";

const Container= styled.div`
  text-align: center;
  margin: 250px auto 0;

  & > h2 {
    font-family: "Fixel Semi-Bold Italic", serif;
    font-size: clamp(3rem, 1.3055rem + 5.4225vw, 7.8125rem);
    color: var(--color-black);
  }


  & > h1 {
    text-shadow: 6px 1px var(--color-yellow);
    font-family: "Fixel Extra-Bold", serif;
    font-size: clamp(3rem, 1.3055rem + 5.4225vw, 7.8125rem);
    color: var(--color-black);
  }
  
  @media(max-width: 768px){
    margin-top: 150px;
  }
`

const Heading = () => {
    return (
        <Container>
            <h2>We Are</h2>
            <h1>Tedo Artline</h1>
        </Container>
    );
};

export default Heading;