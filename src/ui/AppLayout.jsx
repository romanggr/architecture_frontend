import styled from "styled-components";
import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`

const Main = styled.main`

  
`

const AppLayout = () => {
    return (
        <Container>
            <Header/>
            <Main>
                <Outlet/>
            </Main>
            <Footer/>
        </Container>
    );
};

export default AppLayout;