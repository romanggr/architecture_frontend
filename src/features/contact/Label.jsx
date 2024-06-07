import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: clamp(2.125rem, 1.9489rem + 0.5634vw, 2.625rem);
  margin-bottom: 20px;
`



const Label = ({children}) => {
    return (
        <StyledLabel>
            {children}
        </StyledLabel>
    );
};

export default Label;