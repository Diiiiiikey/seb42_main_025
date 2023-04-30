import { Container } from 'Container/Container';
import styled from 'styled-components';
import Commission from 'Components/Commissions';
import { useParams } from 'react-router-dom';
import { getSearchFn } from 'customHook/getSearchFetch';
import Typographies from 'Components/Typographies';

function SearchPage() {
  const { result } = useParams();
  const tagCommissions = getSearchFn(result);

  return (
    <Container>
      {tagCommissions.tagSearchCommissions && (
        <Content>
          <SearchResult>
            <StyledTitleContainer>
              <Typographies text={result} variant="h2" typoStyle="title_1" />
              <Typographies text="에 대한 검색 결과" typoStyle="base_2" />
            </StyledTitleContainer>
          </SearchResult>
          <CommissionBox>
            <Commission commissions={tagCommissions.tagSearchCommissions.data} />
          </CommissionBox>
        </Content>
      )}
    </Container>
  );
}

const Content = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(auto, minmax(3.5rem, auto));
  gap: 3rem 0;
`;

const SearchResult = styled.div`
  display: flex;
  width: 100%;
  grid-column: 1 / span 12;
  gap: 2rem;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
`;

const CommissionBox = styled.div`
  display: grid;
  justify-content: center;
  grid-column: 1 / span 12;
  grid-row: 2 / span 1;
`;

export default SearchPage;
