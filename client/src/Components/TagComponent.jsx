import styled from 'styled-components';

function TagComponent({ text, deleteTagItem, handleClickTag, varient }) {
  return (
    <>
      {varient ? (
        <StyledDivContainer as={varient}>
          <StyledTag>{text}</StyledTag>
          <StyledButton onClick={deleteTagItem}>X</StyledButton>
        </StyledDivContainer>
      ) : (
        <StyledContainer onClick={handleClickTag}>
          <StyledTag>{text}</StyledTag>
        </StyledContainer>
      )}
    </>
  );
}

const StyledDivContainer = styled.button`
  display: flex;
  height: fit-content;
  width: fit-content;
  padding: 0.1rem 0.25rem;
  margin: 0.25rem;
  border-radius: 0.25rem;
  border: 2px solid #cccccc;
  font-size: 1rem;
  font-weight: bold;
  color: #606060;
  background-color: transparent;
  white-space: nowrap;
  gap: 0.25rem;
`;

const StyledContainer = styled(StyledDivContainer)`
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(70%);
    transform: translate(0, 1px);
  }
`;

const StyledTag = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  padding-bottom: 0.6px;
  border-radius: 50px;
  border: none;
  background-color: #ddba9d;
  color: white;

  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(70%);
    transform: translate(0, 1px);
  }
`;

export default TagComponent;
