import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <StHeaderDiv>
      <StHeaderTitle><Link to='/'>✐ keep a record of household expenses</Link> </StHeaderTitle>
      <StBtnBox>
        <StLogin> <Link to='/auth/login'>로그인</Link></StLogin>
        <StSignUp>
          <Link to='/auth/signup'>회원가입</Link>
        </StSignUp>
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

  a {
    color: black;
  }
`;

const StBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  margin-right: 15px;
`

// 한개로 합쳐보자
const StLogin = styled.button`
  border-radius: 20px;
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 15px;
  border: none;
`;
const StSignUp = styled.button`
  border-radius: 20px;
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 15px;
  border: none;
`
