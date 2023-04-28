import styled from 'styled-components';

function PostMainMenu() {
  return (
    <StyledContainer>
      <StyledMenu href="#상세설명">상세설명</StyledMenu>
      <StyledMenu href="#리뷰">리뷰</StyledMenu>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 3rem;
  width: 100%;
  align-items: center;
  margin-top: 3rem;
  background-color: #ddba9d;
  border-radius: 0.25rem;
  white-space: nowrap;
  font-weight: bold;
`;

const StyledMenu = styled.a`
  color: #fff;
  text-decoration: none;
`;

export default PostMainMenu;
