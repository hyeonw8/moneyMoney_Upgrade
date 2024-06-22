import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setSelectedMonth } from '/src/redux/slices/datasSlice';
import { useSelector } from 'react-redux';

const MonthButton = () => {
  const selectedMonth = useSelector((state) => state.datas.selectedMonth);
  const dispatch = useDispatch();

  // const monthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const monthArr = [...Array(12)].map((_, i) => i + 1);

  const onClickHandler = (month) => {
    if (month !== selectedMonth) {
      dispatch(setSelectedMonth(month));
    }
  };

  useEffect(() => {
    if (selectedMonth !== null) {
      localStorage.setItem('month', JSON.stringify(selectedMonth));
    }
  }, [selectedMonth]);

  return (
    <>
      {monthArr.map((month) => {
        const isSelected = selectedMonth === month;

        return (
        <button
          className={`h-16 bg-white text-black text-lg shadow-lg rounded-xl basis-13% font-black border-none hover:bg-blue-200 ${
          selectedMonth === month ? 'bg-blue-200' : 'bg-white'
        }`}
          key={month}
          // $active={selectedMonth === month}
          onClick={() => onClickHandler(month)}
        >
          {month}월
        </button>
        )
      })}
    </>
  );
};

export default MonthButton;

// const StButton = styled.button`
//   height: 65px;
//   flex-basis: 13%;
//   font-size: 20px;
//   border-radius: 20px;
//   border: none;
//   background-color: ${(props) => (props.$active ? 'lightblue' : '#e2e2e2')};
//   &:hover {
//     background-color: lightblue;
//   }
//   font-family: 'Pretendard', sans-serif;
//   font-weight: 900;
// `;
