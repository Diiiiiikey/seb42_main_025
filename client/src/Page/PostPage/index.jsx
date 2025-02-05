import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Buttons from 'Components/Buttons';
// import Commission from 'Components/Commissions';
import { PostDetail, PostMain, PostImage } from './module/Post';
import { Container } from 'Container/Container';
// import Typography from 'Components/Typography';
import { getCommission, deleteCommission } from 'apis/api/commission';
import { useParams, useNavigate } from 'react-router-dom';

function Post() {
  const [commission, setCommission] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const onclickEdit = () => {
    navigate(`/edit-commission/${id}`);
  };

  const onclickDelete = async () => {
    await deleteCommission(id);
    setCommission(null); // 현재 commission 상태를 업데이트하기 전에 null 값으로 초기화
    navigate('/');
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await getCommission(id);
      setCommission(data);
    };
    fetch();
  }, [setCommission]);

  return (
    <Container>
      {commission && (
        <>
          <PostDetailBox>
            <ImageWrapper>
              <PostImage commission={commission.data} />
            </ImageWrapper>
            <PostDetailWrapper>
              <PostDetail commission={commission.data} />
            </PostDetailWrapper>
          </PostDetailBox>
          <DetailBox>
            <PostMain commission={commission.data} />
          </DetailBox>
          <Edit>
            <EditButton>
              <Buttons text="수정" handleClick={onclickEdit} buttonStyle="edit" />
            </EditButton>
            <EditButton>
              <Buttons text="삭제" handleClick={onclickDelete} buttonStyle="edit" />
            </EditButton>
          </Edit>
          {/* <CommissionBox>
            <Typography
              variant="h2"
              text="비슷한 커미션"
              size="xl"
              bold="bold"
              space="nowrap"
              color="tea_2"
              padding="m"
            />
            <Commission commissions={commission} />
          </CommissionBox> */}
        </>
      )}
    </Container>
  );
}

const PostDetailBox = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  margin: 0 auto;
  position: relative;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1.5;
`;

const PostDetailWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  border: 1px solid #cecece;
  border-radius: 0.25rem;
  padding: 2rem;
`;

const DetailBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Edit = styled.div`
  display: flex;
  justify-content: end;
  padding: 3rem 0;
  border-bottom: 1px solid #cecece;
`;

const EditButton = styled.div`
  margin: 0.5rem;
`;

// const CommissionBox = styled.div`
//   width: 100%;
//   margin-top: 5rem;
//   flex-wrap: wrap;
//   line-height: 1.7;
// `;

export default Post;
