import styled from 'styled-components';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addItemAPI } from '../api/dataAPI';
import { toast } from 'react-toastify';
import uuid4 from 'uuid4';

const MoneyForm = () => {
  const queryClient = useQueryClient();
  const userData = useSelector((state)=> state.auth.userData);

  // const [date, setDate] = useState('');
  // const [category, setCategory] = useState('');
  // const [cost, setCost] = useState('');
  // const [description, setDescription] = useState('');

  const dateRef = useRef();
  const categoryRef = useRef();
  const costRef = useRef();
  const desceRef = useRef();

  const mutation = useMutation({
    mutationFn: addItemAPI,
    onSuccess: () => {
      toast.success('지출내역이 저장되었습니다.')
      queryClient.invalidateQueries(['expenses']);
    }
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const date = dateRef.current.value;
    const category = categoryRef.current.value;
    const cost = costRef.current.value;
    const description = desceRef.current.value;

    if (!date || !category.trim() || !cost.trim() || !description.trim()) {
      return toast.error('모든 항목을 입력해 주세요!');
    }

    const nextData = {
      month : Number(date.slice(5,7)),
      date,
      category,
      cost: Number(cost),
      description,
      createdBy: userData.userId,
      userId: uuid4(),
    };

    mutation.mutate(nextData);

    dateRef.current.value = '';
    categoryRef.current.value = '';
    costRef.current.value = '';
    desceRef.current.value = '';
  };

  return (
    <StForm onSubmit={onSubmitHandler}>
      <StFormBox>
        <StFormLabel htmlFor="date">날짜</StFormLabel>
        <StFormInput
          type="date"
          ref={dateRef}
          id="date"
        />
      </StFormBox>
      <StFormBox>
        <StFormLabel htmlFor="category">항목</StFormLabel>
        <StFormInput
          type="text"
          placeholder="지출 항목"
          ref={categoryRef}
          id="category"
        />
      </StFormBox>
      <StFormBox>
        <StFormLabel htmlFor="cost">금액</StFormLabel>
        <StFormInput
          type="number"
          placeholder="지출 금액"
          ref={costRef}
          id="cost"
        />
      </StFormBox>
      <StFormBox>
        <StFormLabel htmlFor="desc">내용</StFormLabel>
        <StFormInput
          type="text"
          placeholder="지출 내용"
          ref={desceRef}
          id="desc"
        />
      </StFormBox>
      <StFormButton type="submit">저장</StFormButton>
    </StForm>
  );
};

export default MoneyForm;

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
  margin: 25px 15px 30px 15px;
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