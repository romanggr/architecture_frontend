import styled from "styled-components";

const StyledTextArea = styled.textarea`
  height: 180px;
  outline: none;
  border: 2.5px solid var(--color-white);
  background: transparent;
  padding: 20px;
  font-size: 24px;
  font-family: "Fixel Light", serif;
  margin-bottom: 40px;
`;

const TextArea = ({onChange, value, placeholder}) => {
    return (
        <StyledTextArea
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            value={value}
        />
    );
};

export default TextArea;
