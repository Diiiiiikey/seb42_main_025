import Typographies from 'Components/Typographies';
import styled from 'styled-components';
import Images from 'Components/Images';
import TagComponent from 'Components/TagComponent';

function TradeModuleBox({ info }) {
  console.log(info);
  return (
    <StyledSummaryBox>
      <Typographies text="신청할 커미션" typoStyle="title_3" />
      <StyledSection>
        <Images
          imgStyle="postSmall"
          src={info.commission.imageUrl[1]}
          alt={info.commission.title}
        />
        <StyledContentContainer>
          <Typographies text={info.commission.title} typoStyle="title_4" />
          {info.commission.tags.map(tag => {
            return <TagComponent text={tag} varient="span" key={tag} />;
          })}
        </StyledContentContainer>
      </StyledSection>
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  white-space: nowrap;
  gap: 1rem;
`;

const StyledSection = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1rem;
  background-color: #f6f6f6;
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`;

export default TradeModuleBox;
