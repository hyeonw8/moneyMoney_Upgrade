import styled from 'styled-components';
import MoneyItem from './MoneyItem';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { getItemsAPI } from '../../api/dataAPI';

const MoneyList = () => {
  //const datas = useSelector((state) => state.datas.data);
  const selectedMonth = useSelector((state) => state.datas.selectedMonth);

  const { data: expenses, isLoading, isError } = useQuery({
  queryKey: ['expenses'],
  queryFn: getItemsAPI,
  });
  // console.log('isLoading >>> ',isLoading );
  // console.log('expenses >>> ',expenses);
  // console.log('isError >>> ',isError);

  if (isLoading) {
    return <StLoadingMessage>Loading...📎</StLoadingMessage>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  const filteredData = expenses?.filter((data) => {
    return data.month === selectedMonth;
  });

  if (filteredData.length === 0) {
    return (
      <StNotMoneyList>
        <h2> 해당 월에는 지출 내역이 없습니다! </h2>
        <p> 지출 내역이 있다면 추가해주세요 📝 </p>
      </StNotMoneyList>
    );
  }

  const sortedData = filteredData.sort((data1, data2) => {
    if (new Date(data2.date) - new Date(data1.date) === 0) {
      return Number(data2.cost) - Number(data1.cost) 
    }
    return new Date(data2.date) - new Date(data1.date);
  });

  return (
    <StMoneyList>
      {sortedData.map((data) => (
        <MoneyItem key={data.id} data={data} />
      ))}
    </StMoneyList>
  );
};

export default MoneyList;

const StMoneyList = styled.div`
  height: 100%;
  background-color: #fff;
  margin: 30px 15px 10px 15px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
`;
const StNotMoneyList = styled.div`
  height: 100%;
  background-color: #fff;
  margin: 30px 15px 10px 15px;
  border-radius: 20px;
  padding: 39px;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  font-weight: 500;
`;

export const StLoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 20px;
`;