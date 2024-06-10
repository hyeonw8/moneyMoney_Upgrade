import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StItem = styled.div`
  background-color: #eeeeeee3;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
`;
const StCost = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
const StText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 500px;
  line-height: 1.2rem;
  font-size: 17px;
`
const StDescription = styled.h4`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const MoneyItem = ({ data }) => {
  const { id, date, category, cost, description } = data;
  const navigate = useNavigate();

  return (
    <StItem
      onClick={() => {
        navigate(`/detail/${id}`);
      }}
    >
      <StText>
        <p>{date}</p>
        <h4>{category}</h4>
        <StDescription>{description}</StDescription>
      </StText>
      <div>
        <StCost>{cost.toLocaleString('ko-KR')}원</StCost>
      </div>
    </StItem>
  );
};

export default MoneyItem;
