import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const MoneyItem = ({ data }) => {
  const userData = useSelector((state) => state.auth.userData);
  const { id, date, category, cost, description, createdBy } = data;
  const navigate = useNavigate();

  const handleCheckUser = () => {
    if(userData.userId === createdBy) {
      navigate(`/detail/${id}`);
      
    } else {
      toast.error('본인의 지출내역만 접근 가능합니다!')
    }
  }       

  return (
    <StItem
      onClick={handleCheckUser}
    >
      <StText>
        <p>{date}</p>
        <h4>{category}</h4>
        <StDescriptionContainer>
          <StDescription>{description}</StDescription>
          <StCreatedBy>(by {createdBy})</StCreatedBy>
        </StDescriptionContainer>
        
       
      </StText>
      <div>
        <StCost>{cost.toLocaleString('ko-KR')}원</StCost>
      </div>
    </StItem>
  );
};

export default MoneyItem;

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
  margin-right: 5px;
`;

const StDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StCreatedBy = styled.div`
  white-space: nowrap;
`;