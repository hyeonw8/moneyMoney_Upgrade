import styled from 'styled-components';
import { useState } from 'react';
import uuid4 from 'uuid4';
import { useDispatch } from 'react-redux';
import { addData } from '../redux/slices/datasSlice';

const StForm = styled.form`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  margin: 10px 15px 30px 15px;
`;

const StFormBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const StFormLabel = styled.label`
  font-weight: 600;
`;

const StFormButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 17px;
  border-radius: 20px;
  font-weight: 500;
`;

const StFormInput = styled.input`
  border: 1px solid gray;
  border-radius: 10px;
  text-align: center;
  height: 25px;
  width: 150px;
`;

const MoneyForm = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [cost, setCost] = useState('');
  const [description, setDescription] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!date || !category.trim() || !cost.trim() || !description.trim()) {
      return alert('모든 항목을 입력해 주세요!');
    }

    const nextData = {
      id: uuid4(),
      date,
      category,
      cost: Number(cost),
      description,
    };

    dispatch(addData(nextData));
    setDate('');
    setCategory('');
    setCost('');
    setDescription('');

  };

  return (
    <StForm onSubmit={onSubmitHandler}>
      <StFormBox>
        <StFormLabel htmlFor="date">날짜</StFormLabel>
        <StFormInput
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          id="date"
        />
      </StFormBox>
      <StFormBox>
        <StFormLabel htmlFor="category">항목</StFormLabel>
        <StFormInput
          type="text"
          placeholder="지출 항목"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          id="category"
        />
      </StFormBox>
      <StFormBox>
        <StFormLabel htmlFor="cost">금액</StFormLabel>
        <StFormInput
          type="number"
          placeholder="지출 금액"
          value={cost}
          onChange={(e) => {
            setCost(e.target.value);
          }}
          id="cost"
        />
      </StFormBox>
      <StFormBox>
        <StFormLabel htmlFor="desc">내용</StFormLabel>
        <StFormInput
          type="text"
          placeholder="지출 내용"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          id="desc"
        />
      </StFormBox>
      <StFormButton type="submit">저장</StFormButton>
    </StForm>
  );
};

export default MoneyForm;
