import Buttons from 'Components/Buttons';
import Typographies from 'Components/Typographies';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import CommissionListSingleModule from './CommissionListSingleModule';
import { getMemberCommissionFn } from 'customHook/getMemberCommissionFetch';

function CommissionsListModule({ info }) {
  const navigate = useNavigate();

  const authorCommissions = getMemberCommissionFn(info.email);

  const handleClick = () => {
    navigate('/create-commission');
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <Typographies variant="h2" text="커미션 목록" typoStyle="title_1" margin="1rem" />
        <Buttons text="커미션등록" handleClick={handleClick} buttonStyle="write" />
      </StyledHeader>
      {/* <TitleTypographies text="커미션 목록"/> */}
      {/* 로그인 x */}
      <CommissionListContainer>
        {authorCommissions &&
          authorCommissions.map(el => (
            <CommissionListSingleModule key={el.commissionId} info={el} />
          ))}
        {authorCommissions && authorCommissions.length ? null : (
          <Typographies text="현재 등록된 커미션이 없습니다." typoStyle="base_2" />
        )}
      </CommissionListContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  grid-column: 1 / span 7;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CommissionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 2rem;
  gap: 1rem;
  background-color: #ececec;
`;

export default CommissionsListModule;
