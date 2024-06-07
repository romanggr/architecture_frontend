import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {useNavigateTo} from "../../hooks/useNavigateTo.jsx";

const Wrapper = styled.div`
  height: 36vw;
  width: 100vw;
  border: 4px solid var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 1500px;
    width: 85vw;
  }
`;

const Container = styled.div`
  width: 93vw;

`;

const Item = styled(SwiperSlide)`
  width: 100%;
  height: 26vw;
  position: relative;

  & > img {
    width: 100%;
  }

  &:after {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 3;
  }

  &:hover:after {
    opacity: 0.6;
  }
`;

const More = styled.div`
  height: 140px;
  width: 140px;
  background: var(--color-black);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Fixel Light-Italic",serif;
  font-size: 28px;
  text-align: center;
  z-index: 4;
  opacity: 0;
  transition: opacity 0.3s ease;


  ${Item}:hover & {
    opacity: 1;
    cursor: pointer;
  }
`

const Projects = () => {
    const navigateTo = useNavigateTo();


    return (
        <Wrapper>
            <Container>
                <Swiper
                    slidesPerView={3}
                    loop={true}
                >
                    <Item>
                        <img src="/home/solution-1.svg" alt="iamge"/>
                        <More onClick={()=>navigateTo("/project1")}>See project</More>
                    </Item>
                    <Item><img src="/home/solution-2.svg" alt="iamge"/>
                        <More onClick={()=>navigateTo("/project1")}>See project</More>
                    </Item>
                    <Item><img src="/home/solution-3.svg" alt="iamge"/>
                        <More onClick={()=>navigateTo("/project1")}>See project</More>
                    </Item>
                    <Item>
                        <img src="/home/solution-1.svg" alt="iamge"/>
                        <More onClick={()=>navigateTo("/project1")}>See project</More>
                    </Item>
                    <Item><img src="/home/solution-2.svg" alt="iamge"/>
                        <More onClick={()=>navigateTo("/project1")}>See project</More>
                    </Item>
                    <Item><img src="/home/solution-3.svg" alt="iamge"/>
                        <More onClick={()=>navigateTo("/project1")}>See project</More>
                    </Item>
                </Swiper>
            </Container>
        </Wrapper>
    );
};

export default Projects;
