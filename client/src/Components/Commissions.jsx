import styled from 'styled-components';
import TagComponent from 'Components/TagComponent';
import Typographies from 'Components/Typographies';
import Images from './Images';
import { useNavigate } from 'react-router-dom';

function Commissions({ commissions }) {
  const navigate = useNavigate();

  const handleClick = id => {
    navigate(`/commission/${id}`);
    window.location.reload('/');
  };

  const handleClickTag = e => {
    const tag = e.target.innerText;
    navigate(`/search/${tag}`);
  };

  return (
    <CommissionBox>
      {commissions.map(item => {
        return (
          <div key={item.commissionId}>
            <TagBox>
              {item &&
                item.tags.map((tag, idx) => {
                  return (
                    <TagComponent key={(tag, idx)} text={tag} handleClickTag={handleClickTag} />
                  );
                })}
            </TagBox>
            <SellBox onClick={() => handleClick(item.commissionId)}>
              <Images src={item.imageUrl[1]} alt={item.imageUrl[1]} imgStyle="commissions" />
              <Typographies text={item.title} typoStyle="commissions" margin="0.25rem 0 0 0" />
              <Typographies text={item.memberName} typoStyle="base_2" />
            </SellBox>
          </div>
        );
      })}
    </CommissionBox>
  );
}

const CommissionBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  max-width: 100%;
`;

const TagBox = styled.div`
  display: flex;
`;

const SellBox = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  text-decoration: none;
  outline: none;
  line-height: 1.6;
  border: none;
  background-color: transparent;
  justify-content: start;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(70%);
    transform: translate(0, 1px);
  }
`;

export default Commissions;
