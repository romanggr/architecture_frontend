import styled from "styled-components";

const Container = styled.div`
  margin-top: 150px;
  padding: 250px 230px;
  background: var(--color-black);
  width: 100vw;
  
  column-gap: 9vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px 300px 300px;
  
  @media(max-width: 1300px){
    padding: 250px 80px;
    grid-template-columns: 1.4fr 1fr;
  }

  @media(max-width: 768px) {
    padding: 100px 24px;
    grid-template-columns: 1fr;
    grid-template-rows: auto 150px 150px 150px;
    row-gap: 4rem;

  }
`

const PContainer = styled.div`
  grid-row: span 3;
  
  & p{
    padding-bottom: 1rem;
    font-size: clamp(1.5625rem, 1.0123rem + 1.7606vw, 3.125rem);
    line-height: 1.4;
  }
  
  & span{
    font-size: clamp(1.5625rem, 1.0123rem + 1.7606vw, 3.125rem);
    font-family: "Fixel Semi-Bold",serif;
    color: var(--color-yellow);
  }

  @media(max-width: 768px) {
    grid-row: auto;
  
  }
`

const H3 = styled.h3`
  font-family: "Fixel Extra-Bold",serif;
  color: var(--color-grey);
  font-size: clamp(2.6875rem, 1.9173rem + 2.4648vw, 4.875rem);
  line-height: 0.9;
  
  &>span{
    font-size: clamp(2.8125rem, 2.0423rem + 2.4648vw, 5rem);
    color: var(--color-yellow);
    font-family: "Fixel Extra-Bold",serif;
    line-height: 1.3;
  }
`

const Description = () => {
    return (
        <Container>
            <PContainer>
                <p>The <span>Mountain Oasis</span> project is a combination of modern design and harmony with nature,
                    located in a picturesque area of the Carpathians.</p>
                <p>This house is designed for those who appreciate comfort and coziness, while enjoying the beauty of
                    mountain views.</p>
            </PContainer>
            <H3>
                Completion of construction:
                <br/>
                <span>April 2024</span>
            </H3>
            <H3>
                Area of the house:
                <br/>
                <span>150 м²</span>
            </H3>
            <H3>
                Location:
                <br/>
                <span>Carpathians, Ukraine</span>
            </H3>

        </Container>
    );
};

export default Description;