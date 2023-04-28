import styled from 'styled-components';
import Buttons from 'Components/Buttons';
import Typographies from 'Components/Typographies';
import TagComponent from 'Components/TagComponent';
import { useNavigate, useParams } from 'react-router-dom';

export function PostDetail({ commission }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClick = () => {
    navigate(`/trade/${id}`);
  };
  return (
    <>
      {commission && (
        <Summary>
          <Typographies text={commission.title} variant="h2" typoStyle="title_2" />
          <Typographies text={commission.subContent} size="l" typoStyle="commissionSub" />
          <TagContainer>
            {commission &&
              commission.tags.map(tag => {
                return <TagComponent key={tag} text={tag} />;
              })}
          </TagContainer>
          <Typographies text={commission.memberName} typoStyle="name" />
          <Buttons text="신청하기" handleClick={handleClick} buttonStyle="long" />
        </Summary>
      )}
    </>
  );
}

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  gap: 2rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  overflow: hidden;
`;
