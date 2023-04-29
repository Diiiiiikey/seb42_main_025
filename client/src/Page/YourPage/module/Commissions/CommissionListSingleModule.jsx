import Typographies from 'Components/Typographies';
import Images from 'Components/Images';
import styled from 'styled-components';
import TagComponent from 'Components/TagComponent';
import { useNavigate } from 'react-router-dom';

function CommissionListSingleModule({ info }) {
  const navigate = useNavigate();

  const handleCommission = e => {
    const id = e.target.id;
    navigate(`/commission/${id}`);
  };

  return (
    <StyledSummaryBox id={info.commissionId} onClick={handleCommission}>
      {info && (
        <>
          <Images src={info.imageUrl[1]} alt={info.title} imgStyle="postSmall" />
          <TextContainer>
            <Typographies text={info.title} typoStyle="title_3" />
            <StyledTags>
              {info.tags.map(el => (
                <TagComponent key={el} text={el} />
              ))}
            </StyledTags>
          </TextContainer>
        </>
      )}
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 8.5rem;
  padding: 1rem;
  gap: 1.5rem;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem 0 #999999;

  cursor: pointer;
`;

const TextContainer = styled.div`
  display: grid;
  width: 100%;
  padding-top: 0.5rem;
  gap: 1rem;
`;

const StyledTags = styled.div`
  display: flex;
  flex-direction: row;
`;
export default CommissionListSingleModule;
