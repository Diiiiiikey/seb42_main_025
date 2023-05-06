import Typographies from 'Components/Typographies';
import PostMainMenu from './PostMainMenu';
import styled from 'styled-components';
import ReviewList from './ReviewList';

export function PostMain({ commission }) {
  const info = [
    {
      image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
      content: '정말 마음에 들었습니다.',
      writer: '디디디',
      date: '2023-03-25',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2020/01/01/00/15/one-address-based-4732816_960_720.jpg',
      content: '정말 마음에 들었습니다.',
      writer: '디디디',
      date: '2023-03-25',
    },
  ];
  return (
    <>
      <PostMainMenu />
      <StyledContainer>
        <Typographies text={commission.content} typoStyle="commissionMain" />
      </StyledContainer>
      <PostMainMenu />
      <StyledContainer>
        {info.map(el => {
          return <ReviewList info={el} key={el.writer + el.date} />;
        })}
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  padding: 1rem;
`;
