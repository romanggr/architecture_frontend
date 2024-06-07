import styled from "styled-components";
import {useNavigateTo} from "../../hooks/useNavigateTo.jsx";

const Container = styled.div`
  background: var(--color-yellow);
  width: 100vw;
  height: 50px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    color: var(--color-black);
    font-family: "Fixel Semi-Bold", serif;
    font-size: 32px;
  }

`

const Contact = () => {
    const navigateTo = useNavigateTo();

    return (
        <>
            {
                window.innerWidth < 768 &&
                <Container onClick={() => navigateTo("contacts")}>
                    <p>Contact with us</p>
                </Container>
            }
        </>
    );
};

export default Contact;