import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../api/authAPI';

const SignUpForm = () => {
  const navigate = useNavigate();

  const [ id, setId ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ nickname, setNickname ] = useState('');

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    
    try {
      const response = await api.post('/register',
        {
          id,
          password,
          nickname,
        }
      );
      const data = response.data;
     
      if(data.success) {
        alert('회원가입이 완료되었습니다. 환영합니다!');
        navigate('/');
      } else {
        alert('회원가입에 실패했습니다. 다시 시도해 주세요.');
      }
    } catch(error) {
      console.error("Signup error:", error);
      alert('회원가입에 오류가 발생했습니다. 다시 시도해 주세요');
      // 토스트나 스윗으로 바꿔보기
    }

    
  }

  return (
    <>
      <StSignUpWrapper>
        <StSignUpForm onSubmit={handleSubmitForm}>
          <StTitle>회원가입</StTitle>
          <StInputBox>
            {/* <StLabel htmlFor="inputID">아이디</StLabel> */}
            <StInput 
              type="text" 
              id="inputID" 
              placeholder='아이디'
              minLength={4}
              maxLength={10}
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </StInputBox>
          <StInputBox>
            {/* <StLabel htmlFor="inputPWD">비밀번호</StLabel> */}
            <StInput 
              type="password" 
              id="inputPWD" 
              placeholder='비밀번호' 
              minLength={4} 
              maxLength={15}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </StInputBox>
          <StInputBox>
            {/* <StLabel htmlFor="inputName">닉네임</StLabel> */}
            <StInput 
              type="text" 
              id="inputName" 
              placeholder='닉네임' 
              minLength={1} 
              maxLength={10}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </StInputBox>
          <StButton type='submit' $text='signup'>회원가입하기</StButton>
          <StButton type='button' $text='login'>
            <Link to='/auth/login'>로그인하러 하기</Link>
          </StButton>
        </StSignUpForm>
      </StSignUpWrapper>
    </>
  );
};

export default SignUpForm;

const StSignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  position: relative;
`;

const StSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 450px;
  background-color: #ffffffdd;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  transform: translate(0%, 40%);
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

// const StLabel = styled.label`
//   font-size: 18px;
// `;
const StInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  text-align: left;
  padding-left: 10px;
`
const StButton = styled.button`
  width: 410px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.$text === 'signup' ? 'black' : 'gray')};
  border: none;
  color: white;
  font-size: 18px;
  margin-top: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;