import MoneyForm from '../components/MoneyForm';
import MoneyList from './List/MoneyList';
import styled from 'styled-components';
import MonthList from './Calendar/MonthList';

const StWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 1200px;
  min-width: 780px;
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
