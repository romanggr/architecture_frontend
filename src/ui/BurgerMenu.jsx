import styled from "styled-components";
import Logo from "./Logo.jsx";
import Burger from "./Burger.jsx";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  min-height: 100vh;
  background: var(--color-yellow);
`

const Head = styled.div`

`

const Nav = styled.nav`

`

const BurgerMenu = () => {
    return (
        <Container>
            <Head>
                <Logo/>
                <Burger/>
            </Head>
            <Nav></Nav>
        </Container>
    );
};

export default BurgerMenu;