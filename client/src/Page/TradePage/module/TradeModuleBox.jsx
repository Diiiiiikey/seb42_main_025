import Typographies from 'Components/Typographies';
import styled from 'styled-components';
import { getCommissionFn } from 'customHook/getCommissionFetch.js';
import { useParams } from 'react-router-dom';
import LoadingComponent from 'Components/LoadingComponent';
import ImageComponent from 'Components/ImageComponent';

function TradeModuleBox() {
  const { id } = useParams();
  const info = getCommissionFn(id);

  return (
    <StyledSummaryBox>
      {info.commission ? (
        <>
          <ImageComponent
            imgStyle="commission"
            src={info.commission.imageUrl[1]}
            alt={info.commission.title}
            width="l"
          />
          <StyledContentContainer>
            <Typographies text={info.commission.title} variant="h2" typoStyle="title_2" />
          </StyledContentContainer>
        </>
      ) : (
        <LoadingComponent />
      )}
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  border-bottom: 0.25rem solid #f0d8ba;
  white-space: nowrap;
`;

const StyledContentContainer = styled.div`
  display: flex;
  align-items: start;
  max-width: 35rem;
  flex-direction: column;
  margin-left: 2rem;
  gap: 1rem;
`;

export default TradeModuleBox;
