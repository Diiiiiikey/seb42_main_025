import Buttons from 'Components/Buttons';
import Typographies from 'Components/Typographies';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Images from 'Components/Images';

function ProfileModule({ info }) {
  return (
    <StyledContainer>
      <Buttons text="수정" buttonStyle="smallEdit" />
      <StyledImgContainer>
        {info.image ? (
          <Images src={info.image} alt="프로필 사진" />
        ) : (
          <AccountCircleIcon sx={{ fontSize: 256 }} />
        )}
      </StyledImgContainer>
      {info && (
        <>
          <Typographies text={info.nickname} typoStyle="name" />
          <Typographies text={`since ${info.createdAt.substr(0, 10)}`} typoStyle="date" />
        </>
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled.aside`
  display: grid;
  height: fit-content;
  grid-column: 9 / span 4;
  grid-row: 1 / span 1;
  padding: 2rem;
  gap: 2rem;
  background-color: #f5e8dd;
  border-radius: 0.25rem;
  margin-top: 6rem;
`;

const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default ProfileModule;
