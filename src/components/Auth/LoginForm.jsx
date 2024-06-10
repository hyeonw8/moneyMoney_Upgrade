import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = () => {
  const navigate = useNavigate();


  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    navigate('/')
  }

  return (
    <>
      <StLoginWrapper>
        <StLoginForm onSubmit={handleSubmitForm}>
          <StTitle>로그인</StTitle>
          <StInputBox>
            {/* <label htmlFor="inputID">아이디</label> */}
            <StInput type="text" id="inputID" placeholder='아이디' minLength={4} maxLength={10}/>
          </StInputBox>
          <StInputBox>
            {/* <label htmlFor="inputPWD">비밀번호</label> */}
            <StInput type="password" id="inputPWD" placeholder='비밀번호'  minLength={4} maxLength={15}/>
          </StInputBox>
          <StButton type='submit' $text='login'>로그인하기</StButton>
          <StButton type='button' $text='signUp'>
            <Link to='/auth/singup'>회원가입하러 가기</Link>
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
  height: 100vh;
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
  background-color: ${(props) => (props.$text === 'login' ? 'black' : 'gray')};
  border: none;
  color: white;
  font-size: 18px;
  margin-top: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
`;