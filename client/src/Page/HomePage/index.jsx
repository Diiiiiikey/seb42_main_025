import styled from 'styled-components';
import Carousel from 'Components/Carousel';
import Commissions from 'Components/Commissions';
import Typographies from 'Components/Typographies';
import AdComponent from 'Components/AdComponent';
import { Container } from 'Container/Container';
import { useEffect, useState } from 'react';
import { getCommissionsFn, getTagsCommissionsFn } from 'customHook/getCommissionFetch';
import { getCommissions } from 'apis/api/commissions';

function Home() {
  const [carouselBackground, setCarouselBackground] = useState(null);

  const changeCarouselImage = target => {
    setCarouselBackground(target);
  };

  const commissionsFilterdCommissionId = getCommissionsFn('commissionId');
  const commissionsFilterdViewCount = getCommissionsFn('viewCount');
  const commissionsFilterdTags = getTagsCommissionsFn();

  useEffect(() => {
    const fetch = async () => {
      const data = await getCommissions('commissionId');
      setCarouselBackground(data[0].imageUrl[1]);
    };
    fetch();
  }, [setCarouselBackground]);

  return (
    <>
      {commissionsFilterdViewCount[0] &&
        commissionsFilterdCommissionId[0] &&
        commissionsFilterdTags.tagsCommissions[0] &&
        carouselBackground && (
          <Container>
            <Contents>
              <CarouselBox>
                <Carousel
                  items={[
                    commissionsFilterdCommissionId[0],
                    commissionsFilterdViewCount[0],
                    commissionsFilterdTags.tagsCommissions[0],
                  ]}
                  changeCarouselImage={changeCarouselImage}
                />
              </CarouselBox>
              <CarouselBoxBackground url={carouselBackground} />
              <SellContainer>
                <Typographies
                  text="새로운 커미션"
                  typoStyle="title_1"
                  variant="h2"
                  margin="0 0 1rem 0"
                />
                <Commissions commissions={commissionsFilterdCommissionId} />
              </SellContainer>
              <AdComponent />
              <SellContainer>
                <Typographies
                  text="인기 커미션"
                  typoStyle="title_1"
                  variant="h2"
                  margin="0 0 1rem 0"
                />
                <Commissions commissions={commissionsFilterdViewCount} />
              </SellContainer>
              <SellContainer>
                <Typographies
                  text="추천 태그 커미션"
                  typoStyle="title_1"
                  variant="h2"
                  margin="0 0 1rem 0"
                />
                <Commissions commissions={commissionsFilterdTags.tagsCommissions} />
              </SellContainer>
            </Contents>
          </Container>
        )}
    </>
  );
}

const Contents = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(auto, minmax(3.5rem, auto));
  gap: 5rem 0;
`;

const CarouselBox = styled.div`
  display: grid;
  justify-content: center;
  grid-column: 1 / span 12;
  grid-row: 1 / span 1;
`;

const CarouselBoxBackground = styled.div.attrs(props => ({
  url: props.url,
}))`
  width: 90%;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  grid-column: 1 / span 12;
  grid-row: 1 / span 1;
  filter: blur(2rem);
  z-index: -2;
`;

const SellContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1 / span 12;
  flex-wrap: wrap;
`;

export default Home;
