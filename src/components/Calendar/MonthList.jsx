import styled from 'styled-components';
import MonthButton from './MonthButton';

const MonthList = () => {
  return (
    <>
      <div className="mt-0 mr-4 mb-2.5 ml-4 flex flex-row flex-wrap justify-center items-center gap-8 bg-slate-200 shadow-lg p-5 rounded-2xl">
        <MonthButton />
      </div>
    </>
  );
};

export default MonthList;

// const StMonthList = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   gap: 30px;
//   background-color: #fff;
//   border-radius: 20px;
//   margin: 0 15px 10px 15px;
// `;
