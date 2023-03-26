import styled from 'styled-components';
import { Container } from 'Container/Container';
import ProgressModule from './module/Progress/ProgressModule';
import ProfileModule from './module/Profile/ProfileModule';
import CommissionsListModule from './module/Commissions/CommissionsListModule';
import ChatModule from './module/Chat/ChatModule';
import { getMemberInfoFn } from 'useFetch/getMemberInfoFetch';
import { getMemberRoleFn } from 'useFetch/getMemberInfoFetch';

function MyPage() {
  const currentMemberInfo = getMemberInfoFn();
  const currentMemberRole = getMemberRoleFn();

  console.log(currentMemberRole);
  console.log(currentMemberInfo);

  return (
    <Container>
      {currentMemberInfo && (
        <StyledContents>
          <ProgressModule currentMemberInfo={currentMemberInfo} />
          <ProfileModule currentMemberInfo={currentMemberInfo} />
          <CommissionsListModule currentMemberInfo={currentMemberInfo} />
          <ChatModule currentMemberInfo={currentMemberInfo} />
        </StyledContents>
      )}
    </Container>
  );
}

const StyledContents = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(6rem, auto);
  gap: 5rem 2rem;
`;

export default MyPage;