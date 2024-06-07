import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Border = styled.div`
  width: 87vw;
  border: 4px solid var(--color-black);
  margin: auto;
`;

const Wrapper = styled.div`


  width: 100%;
  height: 200vw;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Container = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;

`;

const Item = styled.div`
  width: 74vw;
  height: 67vw;
  position: relative;


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

const Image = styled.img`
  width: 100%;
  
`

// const Arrow = styled.img`
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   width: 12.5vw;
// `

const More = styled.div`
  height: 200px;
  width: 200px;
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
  
  @media(max-width: 500px){
    height: 140px;
    width: 140px;
    font-size: 22px;
    
  }
`

const VerticalProjects = () => {
    const navigate = useNavigate();
    const navigateTo = (path) =>{
        navigate(path);
        window.scrollTo(0, 0);
    }

    return (
        <Border>
            <Wrapper>
                <Container>
                    <Item>
                        <Image src="/home/solution-1.svg" alt="image"/>
                        {/*<Arrow src={"/project1/arrow.svg"} alt={"arrow"}/>*/}
                        <More onClick={()=>navigateTo("/project1")}>See project</More>
                    </Item>
                    <Item>
                        <Image src="/home/solution-2.svg" alt="image"/>
                        <More onClick={()=>navigateTo("/project1")}>See project</More>
                    </Item>
                    <Item>
                        <Image src="/home/solution-3.svg" alt="image"/>
                        <More onClick={()=>navigateTo("/project1")}>See project</More>
                    </Item>
                    <Item>
                        <Image src="/home/solution-1.svg" alt="image"/>
                        <More onClick={()=>navigateTo("/project1")}>See project</More>
                    </Item>
                    <Item>
                        <Image src="/home/solution-2.svg" alt="image"/>
                        <More onClick={()=>navigateTo("/project1")}>See project</More>
                    </Item>
                    <Item>
                        <Image src="/home/solution-3.svg" alt="image"/>
                        <More onClick={()=>navigateTo("/project1")}>See project</More>
                    </Item>
                </Container>
            </Wrapper>
        </Border>
    );
};

export default VerticalProjects;
