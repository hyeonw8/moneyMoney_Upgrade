import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { login, setUserData } from '../../redux/slices/authSlice';
import { loginAPI } from '../../api/authAPI';
import { toast } from 'react-toastify';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [ id, setId ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if(id.length < 4 || id.length > 10) {
      toast.warn('아이디는 4글자에서 10글자 이내입니다!');
    }
    if(password.length < 4 || password.length > 15) {
      toast.warn('패스워드는 4글자에서 15글자 이내입니다!');
    }

    const response = await loginAPI({
        id,
        password,
    })
    const data = response.data;

    if(data.success) {
      toast.success('로그인되었습니다');
      localStorage.setItem('accessToken', data.accessToken);
      dispatch(login(data.accessToken));
      dispatch(setUserData(data));
      navigate('/');
    } else {
      toast.error('로그인에 실패했습니다. 다시 시도해 주세요.');
    }
  };
  

  return (
    <>
      <StLoginWrapper>
        <StLoginForm onSubmit={handleSubmitForm}>
          <StTitle>로그인</StTitle>
          <StInputBox>
            <StInput 
              type="text" 
              id="inputID" 
              placeholder="아이디" 
              minLength={4} 
              maxLength={10}
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </StInputBox>
          <StInputBox>
            <StInput 
              type="password" 
              id="inputPWD" 
              placeholder="비밀번호" 
              minLength={4} 
              maxLength={15}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </StInputBox>
          <StButton type="submit" $text="login">
            로그인하기
          </StButton>
          <StButton type="button" $text="signUp">
            <Link to="/auth/signup">회원가입하러 가기</Link>
          </StButton>
        </StLoginForm>
      </StLoginWrapper>
    </>
  );
};

export default LoginForm;

const StLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  position: relative;
`;

const StLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 400px;
  background-color: #ffffffdd;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  transform: translate(0%, 50%);
`;

const StInputBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  text-align: center;
`;

const StTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const StInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  text-align: left;
  padding-left: 10px;
`;

const StButton = styled.button`
  width: 410px;
  height: 50px;
  border-radius: 10px;
  background-color: ${(props) => (props.$text === 'login' ? 'black' : 'gray')};
  border: none;
  color: white;
  font-size: 18px;
  margin-top: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
