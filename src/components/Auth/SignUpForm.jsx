import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { registerAPI } from '../../api/authAPI';
import { toast } from 'react-toastify';

const SignUpForm = () => {
  const navigate = useNavigate();

  const [ id, setId ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ nickname, setNickname ] = useState('');

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if(id.length < 4 || id.length > 10) {
      toast.warn('아이디는 4글자에서 10글자 이내로만 가능합니다!');
    }
    if(password.length < 4 || password.length > 15) {
      toast.warn('패스워드는 4글자에서 15글자 이내로만 가능합니다!');
    }
    if(nickname.length < 4 || nickname.length > 10) {
      toast.warn('닉네임은 1글자에서 10글자 이내로만 가능합니다!');
    }
    
    const response = await registerAPI({
      id, 
      password,
      nickname,
    })
    const data = response.data;
    if(data.success) {
      toast.success('회원가입이 완료되었습니다. 환영합니다!');
      navigate('/login');
    } else {
      toast.error('회원가입에 실패했습니다. 다시 시도해 주세요.');
    }
  } 


  return (
    <>
      <StSignUpWrapper>
        <StSignUpForm onSubmit={handleSubmitForm}>
          <StTitle>회원가입</StTitle>
          <StInputBox>
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
            <Link to='/login'>로그인하러 하기</Link>
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
  cursor: pointer;
  background-color: ${(props) => (props.$text === 'signup' ? 'black' : 'gray')};
  border: none;
  color: white;
  font-size: 18px;
  margin-top: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;