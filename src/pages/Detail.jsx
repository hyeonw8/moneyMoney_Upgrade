import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { deleteItemAPI, editItemAPI, getItemAPI } from '../api/dataAPI';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { StLoadingMessage } from '../components/List/MoneyList';

const Detail = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const params = useParams();

  const dateRef = useRef(null);
  const categoryRef = useRef(null);
  const costRef = useRef(null);
  const descriptionRef = useRef(null);

  const { data: targetData, isLoading, isError } = useQuery({
    queryKey: ['expenses', params.id], // 전체 데이터를 가져오는 것과 동일한데 여기에 현재 params.id를 추가
    queryFn: getItemAPI,
  });

  console.log(targetData)
  const mutationDelete = useMutation({
    mutationFn: deleteItemAPI,
    onSuccess: () => {
      queryClient.invalidateQueries(['expenses']); 
    }
  });

  const mutationEdit = useMutation({
    mutationFn: editItemAPI,
    onSuccess: () => {
      queryClient.invalidateQueries(['expenses']);
    }
  });

  useEffect(() => {
    if (targetData) {
      dateRef.current.value = targetData.date;
      categoryRef.current.value = targetData.category;
      costRef.current.value = targetData.cost;
      descriptionRef.current.value = targetData.description;
    }
  }, [targetData]);

  if (isLoading) {
    return <StLoadingMessage>Loading...📎</StLoadingMessage>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  const handleDeleteData = (id) => {
    if (confirm('정말로 이 지출 항목을 삭제하시겠습니까?')) {
      mutationDelete.mutate(id);

      toast.success('삭제되었습니다.');
      navigate('/');
    } 
  };

  const handleUpdateData = (id) => {
    const updatedItem = {
      id,
      date: dateRef.current.value,
      category: categoryRef.current.value,
      cost: Number(costRef.current.value),
      description: descriptionRef.current.value,
    };
    
    mutationEdit.mutate(updatedItem);
    console.log(updatedItem);
    toast.success('수정되었습니다.');
    navigate('/');
  };

  

  return (
    <div>
      <StDetailWrapper>
        <StDetailTitle>상세 내역 페이지</StDetailTitle>
          <StDetailForm
          onSubmit={() => handleUpdateData(params.id)}
        >
          <StFormDBox>
            <StFormDLabel htmlFor="date">날짜</StFormDLabel>
            <StFormDInput
              type="date"
              defaultValue={targetData.date}
              ref={dateRef}
              id="date"
            />
          </StFormDBox>
          <StFormDBox>
            <StFormDLabel htmlFor="category">항목</StFormDLabel>
            <StFormDInput
              type="text"
              defaultValue={targetData.category}
              ref={categoryRef}
              id="category"
            />
          </StFormDBox>
          <StFormDBox>
            <StFormDLabel htmlFor="cost">금액</StFormDLabel>
            <StFormDInput
              type="number"
              defaultValue={targetData.cost}
              ref={costRef}
              id="cost"
            />
          </StFormDBox>
          <StFormDBox>
            <StFormDLabel htmlFor="desc">내용</StFormDLabel>
            <StFormDInput
              type="text"
              defaultValue={targetData.description}
              ref={descriptionRef}
              id="desc"
            />
          </StFormDBox>
          <StButtonDiv>
            <StBtn type="submit" $text="update">
              수정
            </StBtn>
            <StBtn
              type="button"
              $text="delete"
              onClick={() => handleDeleteData(params.id)}
            >
              삭제
            </StBtn>
            <StBtn type="button" $text="gohome" onClick={() => navigate('/')}>
              뒤로가기
            </StBtn>
          </StButtonDiv>
        </StDetailForm>  
      </StDetailWrapper>
    </div>
  );
};

export default Detail;

const StDetailWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 1200px;
  min-width: 780px;
  margin: 0 auto;
  padding: 10px;
`;
const StDetailTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
`;
const StDetailForm = styled.form`
  background-color: white;
  width: 800px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  row-gap: 20px;
  margin: 0 auto;
  border-radius: 20px;
`;
const StFormDBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
const StFormDInput = styled.input`
  border: 1px solid gray;
  border-radius: 10px;
  height: 30px;
  padding-left: 10px;
`;
const StFormDLabel = styled.label`
  font-weight: bold;
`;
const StButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const StBtn = styled.button`
  background-color: ${(props) => {
    switch (props.$text) {
      case 'update':
        return '#134effd9';
      case 'delete':
        return 'red';
      case 'gohome':
        return 'gray';
    }
  }};
  color: white;
  border: none;
  border-radius: 10px;
  width: 80px;
  height: 40px;
`;