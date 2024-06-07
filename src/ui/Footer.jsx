import styled from "styled-components";
import FooterNav from "./FooterNav.jsx";

const Wrapper = styled.footer`
  width: 100vw;
  height: auto;
  background: var(--color-black);
  display: flex;
  flex-direction: column;
  justify-content: end;
`


const Container = styled.div`
  margin-top: 120px;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    margin: 0;
    height: 1300px;
  }

  @media (max-width: 600px) {
    height: 900px;

  }
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: 50%;
  }
`


const LogoContainer = styled.div`
  display: flex;
  height: 330px;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1rem;

    & > img {
      width: 50vw;
    }
  }

`

const P = styled.p`
  justify-self: end;
  width: 30%;
  
  &>p{
    font-size: 97px;
    font-family: "Fixel Semi-Bold", serif;
    text-align: end;
    padding-right: 1rem;
    transition: 0.5s;
    
    &:hover{
      color: var(--color-yellow);
    }
  }


  @media (max-width: 1300px) {
    width: 50%;
  }

  @media (max-width: 1000px) {
    display: none;
  }

`


const Bottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 1000px) {
    height: 50%;
    position: relative;
  }
`


const Heading = styled.div`
  font-size: clamp(6.0625rem, 2.1893rem + 12.3944vw, 17.0625rem);
  font-family: "Fixel Extra-Bold", serif;
  color: var(--color-yellow);
  line-height: 0.9;
  width: 50%;
  margin: 5rem 0 0 3rem;

  @media (max-width: 1000px) {
    transform: rotate(-90deg);
    margin: 0;
    position: absolute;
    bottom: 90px;
    left: -30px;
    font-family: "Fixel Semi-Bold",serif;
  }

  @media (max-width: 600px) {
    bottom: 50px;
    left: 0;
  }

  @media (max-width: 400px) {
    bottom: 20px;
    left: 10px;
  }
`


const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 3rem 3rem 0;

  & img {
    width: 80px;
  }

  @media (max-width: 1000px) {
    margin: 0;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`

const Mail = styled.div`
  transition: 0.4s;
  background: var(--color-white);
  padding: 1rem;
  
  &:hover{
      background: var(--color-yellow);
  }
`

const Linkedin = styled.div`
  transition: 0.4s;
  background: var(--color-white);
  padding: 1rem;
  
  &:hover{
    background: var(--color-yellow);
  }
`



const Policy = styled.div`
  min-height: 56px;
  background: var(--color-white);
  display: flex;
  align-items: center;
  gap: 1rem;

  & > p {
    font-family: "Fixel Light-Italic", serif;
    font-size: 14px;
    color: var(--color-black);
    padding-left: 2rem;
  }

  @media (max-width: 1000px) {
    display: none;
  }

`

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Top>
                    <LogoContainer>
                        <img src="/ui/footer-logo.svg" alt="logo"/>
                        <FooterNav/>
                    </LogoContainer>
                    <P>
                        <p>Clever.</p>
                        <p>Tailored.</p>
                        <p>Clients.</p>
                    </P>
                </Top>
                <Bottom>
                    <Heading>Tedo Artline</Heading>
                    <LinksContainer>
                        <Linkedin onClick={()=>window.location.href = "https://www.linkedin.com"}>
                            <img src="/ui/linkedin.svg" alt="linkedin"/>
                        </Linkedin>
                        <Mail onClick={()=>window.location.href = "https://mail.google.com"}>
                            <img src="/ui/mail.svg" alt="email"/>
                        </Mail>
                    </LinksContainer>
                </Bottom>
                <Policy>
                    <p>Copyright 2024 Tedo Group. All rights Reserved.</p>
                </Policy>
            </Container>
        </Wrapper>
    );
};

export default Footer;