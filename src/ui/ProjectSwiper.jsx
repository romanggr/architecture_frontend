import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

const Container = styled.div`
  margin-top: 180px;
  height: 46vw;
  width: 100vw;
  border: 5px solid var(--color-yellow);

  @media(max-width: 768px){
    height: 572px;
    margin-top: 100px;
    
  }
`;

const Item = styled(SwiperSlide)`
  width: 100vw;
  height: 45.5vw;
  background: url(${props => `/project1/swiper/${props.image}`}) no-repeat center center;
  background-size: cover;
  
  @media(max-width: 768px){
    height: 560px;
  }
`;

const ProjectSwiper = ({images}) => {

    return (
        <Container>
            <Swiper
                slidesPerView={1}
                loop={true}>
                {images.map((el, i) => <Item key={i} image={el}/>)}
            </Swiper>
        </Container>
    );
};

export default ProjectSwiper;
