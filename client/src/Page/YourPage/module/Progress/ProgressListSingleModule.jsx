import styled from 'styled-components';
import StateComponent from 'Components/StateComponent';
import Typographies from 'Components/Typographies';
import Buttons from 'Components/Buttons';
import ImageComponent from 'Components/ImageComponent';
import { useState } from 'react';
import { ReviewModal } from './ReviewModal';
import LoadingComponent from 'Components/LoadingComponent';
import { patchTradeStatus } from 'apis/api/trade';

function ProgressListSingleModule({ info }) {
  const [isOpen, setIsOpen] = useState(false);

  const openReviewerHandler = () => {
    setIsOpen(!isOpen);
  };

  const clickedStatus = e => {
    if (e.target.innerText === '수락') {
      patchTradeStatus({ status: '진행 중' }, e.target.id); // cors
    } else if (e.target.innerText === '거절') {
      patchTradeStatus({ status: '거절' }, e.target.id); // cors
    }
  };

  return (
    <>
      {info ? (
        <StyledContainer>
          <StyledComponentContainer>
            <StateComponent state={info.status} />
            <StyledCommissionContainer>
              <Typographies text={info.commission.title} typoStyle="title_4" variant="h3" />
              <StyledImgContainer>
                {info.commission.imageUrl.map((el, idx) =>
                  idx % 2 === 0 && idx < 4 ? (
                    <ImageComponent src={el} key={idx + el} width="s" alt={el} />
                  ) : null
                )}
              </StyledImgContainer>
            </StyledCommissionContainer>
            <StyledCommission>
              <StyledSummaryBox>
                <Typographies text={info.title} typoStyle="title_4" variant="h3" />
                <Typographies text={info.content} typoStyle="base" />
              </StyledSummaryBox>
            </StyledCommission>
            <StyledClient>
              <Typographies text={info.member.nickname} typoStyle="name_2" />
              <Typographies text={info.createdAt.substr(0, 10)} typoStyle="date" />
            </StyledClient>
          </StyledComponentContainer>
          {info.status === '수락대기' ? (
            <StyledButtonContainer>
              <Buttons text="채팅" buttonStyle="smallEdit" />
              <StyledRightButtons>
                <Buttons
                  text="수락"
                  handleClick={clickedStatus}
                  id={info.tradeId}
                  buttonStyle="smallEdit"
                />
                <Buttons text="거절" handleClick={clickedStatus} buttonStyle="smallEdit" />
              </StyledRightButtons>
            </StyledButtonContainer>
          ) : info.status === '진행 중' ? (
            <StyledButtonContainer>
              <Buttons text="채팅" buttonStyle="smallEdit" />
            </StyledButtonContainer>
          ) : info.status === '완료' ? (
            <StyledButtonContainer>
              <Buttons text="채팅" buttonStyle="smallEdit" />
              <Buttons text="리뷰작성" handleClick={openReviewerHandler} buttonStyle="smallEdit" />
              {isOpen === true ? <ReviewModal openReviewerHandler={openReviewerHandler} /> : null}
            </StyledButtonContainer>
          ) : null}
        </StyledContainer>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}

const StyledContainer = styled.div``;

const StyledComponentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #cecece;
  border-radius: 0.25rem;
  margin-top: 1rem;
  padding: 1rem;
`;

const StyledCommissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  padding-right: 0.5rem;
  gap: 0.5rem;
`;

const StyledSummaryBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;
  gap: 0.5rem;
  white-space: nowrap;
  border-left: 1px solid #cecece;
`;

const StyledImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const StyledCommission = styled.div`
  display: flex;
  flex: 6;
`;

const StyledClient = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const StyledRightButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default ProgressListSingleModule;
