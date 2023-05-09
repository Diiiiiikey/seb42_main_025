import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Buttons from 'Components/Buttons';
import TradeModuleBox from './module/TradeModuleBox';
import TextEditor from 'Components/Editor';
import { Container } from 'Container/Container';
import InputComponent from 'Components/InputComponent';
import { postTrade } from 'apis/api/trade';
import { getCommissionFn } from 'customHook/getCommissionFetch.js';
import Typographies from 'Components/Typographies';
import LoadingComponent from 'Components/LoadingComponent';

function TradePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const editorRef = useRef(null);

  // const navigate = useNavigate();

  const { id } = useParams();
  const info = getCommissionFn(id);

  console.log(info);

  const handleSubmit = async e => {
    e.preventDefault();

    const value = {
      title: title.trim(),
      content: content.trim(),
      commissionId: id,
    };

    postTrade(value);
    // navigate(`/form/${res.tradeId}`);
  };

  const onEditorChange = () => {
    const content = editorRef.current.getInstance().getMarkdown().trim();
    setContent(content);
  };

  return (
    <Container>
      {info.commission ? (
        <StyledContainer>
          <StyledHeader>
            <Typographies text={info.commission.memberName} typoStyle="name" width="fit-content" />
            <Typographies text="작가의 커미션 신청 페이지" typoStyle="base" />
          </StyledHeader>
          <TradeModuleBox info={info} />
          <StyledHr />
          <StyledSection>
            <Typographies
              text="최대한 자세하게 신청폼을 작성해주세요"
              typoStyle="base"
              backgraoundColor="gray_4"
              padding="1rem"
            />
            <InputComponent
              placeholder="제목을 입력해주세요"
              onChange={event => setTitle(event.target.value)}
            />
            <TextEditor
              editorRef={editorRef} // useRef로 생성한 ref 전달
              editorHeight={'25rem'}
              onEditorChange={onEditorChange}
            />
          </StyledSection>
          <Buttons type="submit" text="신청하기" buttonStyle="write" handleClick={handleSubmit} />
        </StyledContainer>
      ) : (
        <LoadingComponent />
      )}
    </Container>
  );
}

const StyledContainer = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;
  gap: 2rem;
`;

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
`;

const StyledHr = styled.hr`
  display: flex;
  opacity: 0.3;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default TradePage;
