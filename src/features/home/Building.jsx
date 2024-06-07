import styled from "styled-components";
import BuildingImage from "./BuildingImage.jsx";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 1500px;
  background: var(--color-black);
  margin-top: 150px;
  

  @media (max-width: 1505px) {
    height: 1200px;
  }

  @media (max-width: 1205px) {
    height: 1300px;
  }
  @media (max-width: 900px) {
    height: 1100px;
  }

  @media (max-width: 768px) {
    height: 350vw;
  }
`

const Text = styled.div`
  width: 78vw;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  z-index: 3;

  & > h2 {
    width: 50%;
    font-size: clamp(3.125rem, 1.4745rem + 5.2817vw, 7.8125rem);
    font-family: "Fixel Extra-Bold", serif;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  @media (max-width: 1000px) {
    width: 90vw;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    top: 10%;

    & img {
      width: 50px;
    }
  }
`

const PContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;

  & p {
    width: 100%;
    font-size: clamp(1rem, 0.7359rem + 0.8451vw, 1.75rem);

    & > span {
      font-family: "Fixel Semi-Bold", serif;
      font-size: clamp(1rem, 0.7359rem + 0.8451vw, 1.75rem);
      color: var(--color-yellow);
    }
  }

  @media (max-width: 768px) {
    gap: 20px;
    width: 100%;
  }
`


const Line1 = styled.img`
  position: absolute;
  bottom: 5%;
  left: 0;

  @media (max-width: 768px) {
    display: none;
  }
`

const Line2 = styled.img`
  position: absolute;
  top: 10%;
  left: 0;

  @media (max-width: 768px) {
    display: none;
  }
`

const Line3 = styled.img`
  position: absolute;
  top: 25%;
  right: 0;

  @media (max-width: 768px) {
    display: none;
  }
`


const Building = ({id}) => {
    return (
        <Container id={id}>
            <Text>
                <h2>Building <img src="/ui/yellow-arrow.svg" alt="arrow"/></h2>
                <PContainer>
                    <p>
                        From design to implementation: our team will provide you with
                        the <span>high-quality</span> construction of your
                        dream.
                    </p>
                    <p>
                        We offer an <span>individual approach</span> to each project and use only the best materials and
                        technologies.
                    </p>
                </PContainer>
            </Text>
            <BuildingImage/>
            <Line1 src={"/home/line-1.svg"} alt={"icon"}/>
            <Line2 src={"/home/line-2.svg"} alt={"icon"}/>
            <Line3 src={"/home/line-3.svg"} alt={"icon"}/>
        </Container>
    );
};

export default Building;