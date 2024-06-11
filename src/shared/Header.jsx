import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../redux/slices/authSlice';

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  //console.log(isAuthenticated)
  const dispatch = useDispatch();

const handleLogout = () => {
  localStorage.removeItem('accessToken');
  dispatch(logout());
  console.log(isAuthenticated)
};

return (
  <StHeaderDiv>
    <StHeaderTitle>
      <Link to='/'>✐ keep a record of household expenses</Link>
    </StHeaderTitle>
    <StBtnBox>
      {isAuthenticated ? (
        <StLogin onClick={handleLogout} $text='로그아웃'>로그아웃</StLogin>
      ) : (
        <>
          <StLogin $text='로그인'>
            <Link to='/auth/login'>로그인</Link>
          </StLogin>
          <StSignUp>
            <Link to='/auth/signup'>회원가입</Link>
          </StSignUp>
        </>
      )}
    </StBtnBox>
  </StHeaderDiv>
)
}

export default Header;

const StHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 10px;
  margin: 0 auto;
  /* width: 100vw;
  max-width: 1200px;
  min-width: 780px; */
`;
const StHeaderTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  cursor: pointer;
  a {
    color: black;
  }
`;

const StBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  margin-right: 20px;
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
