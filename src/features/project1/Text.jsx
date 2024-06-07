import styled from "styled-components";


const Container = styled.div`
  margin: 100px auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 92vw;

  
  &>h2{
    font-size: clamp(3rem, 1.3055rem + 5.4225vw, 7.8125rem);
    color: var(--color-black);
    font-family: "Fixel Extra-Bold",serif;
    
    &>span{
      font-size: clamp(3rem, 1.3055rem + 5.4225vw, 7.8125rem);
      color: var(--color-grey);
      font-family: "Fixel Extra-Bold",serif;

    }
  }
  
  &>p{
    color: var(--color-black);
    line-height: 1.5;
    font-size: clamp(1.6875rem, 1.3574rem + 1.0563vw, 2.625rem);
    
  }
  
  @media(max-width: 1100px){
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    gap: 2rem;
  }
`




const Text = () => {
    return (
        <Container>
            <h2><span>The</span><br/> Achievement</h2>
            <p>The Mountain Oasis project is an example of a successful combination of modern architecture and the natural beauty of the Carpathians. </p>
        </Container>
    );
};

export default Text;