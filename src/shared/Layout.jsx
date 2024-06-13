import { useDispatch, useSelector } from 'react-redux';
import Header from '../shared/Header';
import { Outlet, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserInfoAPI } from '../api/authAPI';
import { toast } from 'react-toastify';
import { logout, setUserData } from '../redux/slices/authSlice';

const Layout = () => {
  const userData = useSelector((state) => state.auth.userData);
  console.log('유저 정보 확인(layout에서 로그인 상태 확인 중) ', userData);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUserInfoAPI();
        const data = response.data;

        if (data.success) {
          dispatch(setUserData({ userId: data.id, nickname: data.nickname, avatar: data.avatar }));
        } else {
          dispatch(logout());
          localStorage.removeItem('accessToken');
          navigate('/login');
        }
  
      } catch (error) {
        console.error('유저 정보 가져오기 오류:', error);
        if (error.response && error.response.status === 401) {
          toast.error('토큰이 만료되었습니다. 다시 로그인 해주세요.');
        } else {
          toast.error('유저 정보 가져오기 오류');
        }
        dispatch(logout());
        localStorage.removeItem('accessToken');
        navigate('/login');
      }
    };

    fetchUserInfo();
  }, [dispatch]);


  return (
    <>
      <Header />
      <Outlet /> 
    </>
  );
};

export default Layout;


