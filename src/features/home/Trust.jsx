import styled from "styled-components";

const Container = styled.div`
  width: 88vw;
  margin: 170px auto;
  display: flex;
  justify-content: space-between;


  & > h2 {
    width: 33vw;

    color: var(--color-black);
    font-family: "Fixel Extra-Bold", serif;
    font-size: clamp(2rem, 1.3178rem + 2.1831vw, 3.9375rem);
  }

  & div {
    width: 46vw;
  }

  & p {
    font-size: clamp(1rem, 0.7359rem + 0.8451vw, 1.75rem);
    color: var(--color-black);

    &:last-child {
      margin-top: 1rem;

    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 70px auto;

    & > h2 {
      width: 100%;
    }

    & div {
      width: 100%;

    }

  }
`;

const Trust = () => {
    return (
        <Container>
            <h2>Trust is the essence of our craft</h2>
            <div>
                <p>
                    At Tedo ArtLine Creations, we find inspiration in the human experience of space. We strive to forge a seamless bond between individuals and the environments they inhabit.
                </p>
                <p>
                    With each project, we blend pragmatism with ingenuity to sculpt spaces that narrate tales and evoke emotions, all while prioritizing your unique vision and needs.
                </p>
            </div>
        </Container>
    );
};

export default Trust;
