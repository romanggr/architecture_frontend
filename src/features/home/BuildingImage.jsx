import styled from "styled-components";

const Container = styled.div`
  width: 1500px;
  margin: 100px auto 0;
  height: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media (max-width: 1505px) {
    width: 1200px;
    height: 800px;
  }

  @media (max-width: 1205px) {
    width: 100vw;
    height: 65vw;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 178fr 178fr 681fr;

    height: 300vw;
  }
`

const Image = styled.div`
  background: url(${props => props.src}) center center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: 0.5s;

  &:hover {
    background: url(${props => props.active}) center center no-repeat;
    background-size: cover;

  }

  @media (max-width: 768px) {
    
  }
`

const BigImage = styled.div`
  grid-row: span 2;
  background: url(${props => props.src}) center center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  transition: 0.5s;

  @media (max-width: 768px) {
    grid-row: auto;
    grid-column: span 2;
    order: 5;

  }

`

const BuildingImage = () => {
    return (
        <Container>
            <Image src={"/home/building/image-1.svg"} active={"/home/building/image-active-1.svg"}/>
            <Image src={"/home/building/image-2.svg"} active={"/home/building/image-active-2.svg"}/>
            <BigImage src={"/home/building/image-5.svg"} active={"/home/building/image-5.svg"}/>
            <Image src={"/home/building/image-3.svg"} active={"/home/building/image-active-3.svg"}/>
            <Image src={"/home/building/image-4.svg"} active={"/home/building/image-active-4.svg"}/>
        </Container>
    );
};

export default BuildingImage;