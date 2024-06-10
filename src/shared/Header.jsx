import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <StHeaderDiv>
      <StHeaderTitle>✐ keep a record of household expenses </StHeaderTitle>
      <StBtnBox>
        <StLogin> <Link to='../components/Auth/SignUpForm.jsx'>Login</Link></StLogin>
        <StSignUpReact>
          <Link to='../components/Auth/SignUpForm.jsx'>SignUp</Link>
        </StSignUpReact>
      </StBtnBox>
    </StHeaderDiv>
  );
};

export default Header;

const StHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 10px;
  margin: 0 auto;
  width: 100vw;
  max-width: 1200px;
  min-width: 780px;
`;
const StHeaderTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
`;

const StBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`
const StLogin = styled.button`
  border-radius: 20px;
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 18px;
`;
const StSignUpReact = styled.button`
  border-radius: 20px;
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 18px;
`
