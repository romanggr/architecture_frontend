import styled from "styled-components";

const StyledInput = styled.input`
  height: 80px;
  outline: none;
  border: 2.5px solid var(--color-white);
  background: transparent;
  padding: 20px;
  font-size: 24px;
  font-family: "Fixel Light", serif;
  margin-bottom: 40px;
  
  @media(max-width: 768px){
    height: 70px;
    
  }
`;

const Input = ({ type, onChange, value, placeholder }) => {
    return (
        <StyledInput
            type={type}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            value={value}
        />
    );
};

export default Input;
