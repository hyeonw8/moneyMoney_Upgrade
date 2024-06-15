import MoneyForm from '../components/MoneyForm';
import MoneyList from './List/MoneyList';
import styled from 'styled-components';
import MonthList from './Calendar/MonthList';

const StWrapper = styled.div`
  margin: 0 auto;
  padding: 10px;
`;

const MoneyContainer = () => {
  return (
    <StWrapper>
      <MoneyForm />
      <MonthList />
      <MoneyList />
    </StWrapper>
  );
};

export default MoneyContainer;
