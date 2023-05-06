import { Container } from 'Container/Container';
import { getTradeFn } from 'customHook/getTradeFetch';
import { useParams } from 'react-router-dom';
import Typographies from 'Components/Typographies';
import LoadingComponent from 'Components/LoadingComponent';
import styled from 'styled-components';
import Buttons from 'Components/Buttons';

function FormPage() {
  const { id } = useParams();
  const { trades, member, loading } = getTradeFn(id);

  return (
    <Container>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <StyeldStartContainer>
            <StyeldHead>
              <Typographies text={member.nickname} typoStyle="name" width="fit-content" />
              <Typographies
                text="님 께서 커미션을 신쳥했습니다."
                typoStyle="base"
                width="fit-content"
              />
            </StyeldHead>
            <StyeldHead>
              <Typographies text="신청일:" typoStyle="base" width="fit-content" />
              <Typographies text={trades.createdAt.substr(0, 10)} typoStyle="base" />
            </StyeldHead>
          </StyeldStartContainer>
          <StyeldContainer>
            <StyledContentContainer>
              <StyledContent>
                <Typographies text="제목" typoStyle="base" />
                <Typographies
                  text={trades.title}
                  typoStyle="title_4"
                  backgraoundColor="gray_4"
                  padding="1rem"
                  lineHeight="title"
                />
              </StyledContent>
              <StyledContent>
                <Typographies text="내용" typoStyle="base" />
                <Typographies
                  text={trades.content}
                  typoStyle="title_4"
                  backgraoundColor="gray_4"
                  padding="1rem"
                />
              </StyledContent>
            </StyledContentContainer>
          </StyeldContainer>
          <StyeldButtonsContainer>
            <Buttons text="수락" buttonStyle="long" />
            <Buttons
              text="거절"
              buttonStyle="long"
              color="tea_1"
              backgroundColor="white"
              border="tea_1"
            />
          </StyeldButtonsContainer>
        </>
      )}
    </Container>
  );
}
const StyeldContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #ececec;
`;

const StyeldStartContainer = styled.header`
  display: flex;
  margin: 0 1rem 1rem 1rem;
  justify-content: space-between;
`;

const StyeldHead = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const StyledContentContainer = styled.article`
  display: flex;
  width: 100%;
  max-width: 60rem;
  margin: 3rem 2rem;
  flex-direction: column;
  gap: 2rem;
`;

const StyledContent = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid #cecece;
  border-radius: 0.25rem;
  background-color: #fff;
  gap: 1rem;
`;

const StyeldButtonsContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 3rem;
`;

export default FormPage;
