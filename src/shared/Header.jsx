import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../redux/slices/authSlice';
import { toast } from 'react-toastify';

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userData = useSelector((state) => state.auth.userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('accessToken');
    toast.success('로그아웃되었습니다!');
    navigate('/login');
  };


return (
  <StHeaderDiv>
    <Link to='/'>
      <StHeaderTitle>✐ keep a record of household expenses</StHeaderTitle>
    </Link>
    <StBtnBox>
      {userData && isAuthenticated ? (
        <> 
          <Link to='/mypage'>
            { userData.avatar !== null
              ?   <StImg src={userData.avatar} alt="MyPage" />
              :   <StImg src='../../public/default-profile.jpg' alt="MyPage" />
            }  
          </Link>
          <StUserName>안녕하세요, {userData.nickname}님</StUserName>
          <StLogin onClick={handleLogout} $text='로그아웃'>로그아웃</StLogin>
        </>
      ) : (
        <>
          <Link to='/login'><StLogin $text='로그인'>로그인</StLogin></Link>         
          <Link to='/signup'><StSignUp>회원가입</StSignUp></Link>         
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
`;
const StHeaderTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  cursor: pointer;
`;

const StBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  margin-right: 20px;
`

const StLogin = styled.button`
  border-radius: 20px;
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 15px;
  border: none;
  cursor: pointer;
`;

const StSignUp = styled.button`
  border-radius: 20px;
  width: 100px;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 15px;
  border: none;
  cursor: pointer;
`
export const StImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const StUserName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;