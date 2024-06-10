import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SignUpForm = () => {
  const navigate = useNavigate();


  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    navigate('/');
  }

  return (
    <>
      <StSignUpWrapper>
        <StSignUpForm onSubmit={handleSubmitForm}>
          <StTitle>회원가입</StTitle>
          <StInputBox>
            {/* <StLabel htmlFor="inputID">아이디</StLabel> */}
            <StInput type="text" id="inputID" placeholder='아이디'  minLength={4} maxLength={10}/>
          </StInputBox>
          <StInputBox>
            {/* <StLabel htmlFor="inputPWD">비밀번호</StLabel> */}
            <StInput type="password" id="inputPWD" placeholder='비밀번호' minLength={4} maxLength={15}/>
          </StInputBox>
          <StInputBox>
            {/* <StLabel htmlFor="inputName">닉네임</StLabel> */}
            <StInput type="text" id="inputName" placeholder='닉네임' minLength={1} maxLength={10}/>
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
  height: 100vh;
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
`;