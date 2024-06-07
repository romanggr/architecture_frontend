import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: auto;

  display: grid;
  grid-template-rows: 535px 535px;
  grid-template-columns: 1fr 1fr;
  background: var(--color-black);

  & h3 {
    font-size: clamp(2.3125rem, 1.8944rem + 1.338vw, 3.5rem);
    padding-bottom: 24px;
    font-family: "Fixel Semi-Bold Italic", serif;
  }

  & p {
    font-family: "Fixel Light", serif;
    font-size: clamp(1rem, 0.7359rem + 0.8451vw, 1.75rem);
    padding-bottom: 16px;
  }

  @media (max-width: 768px) {
    grid-template-rows: 350px 350px 350px;
    grid-template-columns: 1fr;

    & h3 {
      text-align: center;
    }
    
  }

`

const Layer1 = styled.div`
  position: relative;
  border-right: 12px solid var(--color-yellow);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    width: 72%;
  }

  @media (max-width: 768px) {
    border: none;
    border-bottom: 10px solid var(--color-yellow);

    & > div {
      width: 82%;
    }
  }
`

const Layer2 = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    width: 72%;
  }

  @media (max-width: 768px) {
    border: none;
    border-bottom: 10px solid var(--color-yellow);


    & > div {
      width: 82%;
    }
  }
`

const Layer3 = styled.div`
  position: relative;
  grid-column: span 2;
  border-top: 12px solid var(--color-yellow);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 78%;
    display: flex;
    justify-content: space-between;

    & > div {
      width: 66%;
    }
  }

  @media (max-width: 768px) {
    grid-column: auto;
    border: none;


    & > div {
      width: 82%;
      flex-direction: column;

      & > div {
        width: 100%;
      }
    }
  }
`

const Line1 = styled.img`
  position: absolute;
  bottom: 15%;
  left: 0;

  @media (max-width: 768px) {
    display: none;
  }
`

const Line2 = styled.img`
  position: absolute;
  bottom: 0;
  left: 25%;

  @media (max-width: 768px) {
    display: none;
  }
`

const Line3 = styled.img`
  position: absolute;
  top: 0;
  right: 20%;

  @media (max-width: 768px) {
      display: none;
  }
`

const Layer = () => {
    return (
        <Container>
            <Layer1>
                <div>
                    <h3>Building</h3>
                    <div>
                        <p>Transforming spaces into harmonious environments that reflect your style and vision.</p>
                        <p>Maximizing functionality while enhancing aesthetic appeal.</p>
                        <p>Collaborating closely with clients to tailor designs to their unique needs and
                            preferences.</p>
                    </div>
                </div>
                <Line1 src={"/about/line-1.svg"} alt={"line-image"}/>
            </Layer1>
            <Layer2>
                <div>
                    <h3>Interior Design</h3>
                    <div>
                        <p>Transforming spaces into harmonious environments that reflect your style and vision.</p>
                        <p>Maximizing functionality while enhancing aesthetic appeal.</p>
                        <p> Collaborating closely with clients to tailor designs to their unique needs and
                            preferences.</p>
                    </div>
                </div>
                <Line3 src={"/about/line-3.svg"} alt={"line-image"}/>
            </Layer2>
            <Layer3>
                <div>
                    <h3>Landscape <br/>Design</h3>
                    <div>
                        <p>Creating outdoor spaces that inspire and delight.</p>
                        <p>Balancing natural elements with architectural features for a harmonious blend.</p>
                        <p>Designing sustainable landscapes that thrive in their surroundings.</p>
                    </div>
                </div>
                <Line2 src={"/about/line-2.svg"} alt={"line-image"}/>
            </Layer3>
        </Container>
    );
};

export default Layer;