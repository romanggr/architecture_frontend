import styled from "styled-components";

const Container = styled.div`
  margin: 230px auto 0;
  width: 85vw;
  display: flex;
  justify-content: space-between;

  
  @media(max-width: 1000px){
    margin-top: 150px;
  }

  @media(max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;

    
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;


`

const Top = styled.div`

  & > h2 {
    font-size: clamp(1.875rem, 0.6206rem + 4.0141vw, 5.4375rem);
    color: var(--color-grey);
    font-family: "Fixel Extra-Bold",serif;
    text-transform: uppercase;
  }

  & > h1 {
    margin-top: 2rem;
    font-family: "Fixel Extra-Bold",serif;
    font-size: clamp(4rem, 1.4032rem + 8.3099vw, 11.375rem);
    color: var(--color-black);
    line-height: 0.9;
  }
  
  @media(max-width: 768px){
    & > h1 {
      margin-top: 1rem;
    }
  }
`

const Bottom = styled.div`

  & > div {
    width: 280px;
    height: 65px;
    background: var(--color-yellow);
    margin-bottom: 2rem;
  }

  & > p {
    font-size: clamp(0.875rem, 0.5229rem + 1.1268vw, 1.875rem);
    color: var(--color-black);
    width: 60%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    
    & > div {
      width: 108px;
      height: 30px;
      margin-bottom: 1rem;
      margin-top: 8rem;
    }

    & > p {
      width: 70%;
    }
  }
`


const Image = styled.img`
  width: 34vw;
  
  @media(max-width: 768px){
    margin-top: 2rem;
    width: 100%;
    align-self: center;
  }
`

const Welcome = () => {
    return (
        <Container>
            <Content>
                <Top>
                    <h2>Time TO meet your</h2>
                    <h1>Mountain Oasis</h1>
                </Top>
                <Bottom>
                    <div/>
                    <p>combination of modern design and harmony with nature, located in a picturesque area of the
                        Carpathians</p>
                </Bottom>
            </Content>
            <Image src={"/project1/welcome-image.svg"} alt={"image"}/>
        </Container>
    );
};

export default Welcome;