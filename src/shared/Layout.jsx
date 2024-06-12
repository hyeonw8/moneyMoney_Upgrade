import { useDispatch, useSelector } from 'react-redux';
import Header from '../shared/Header';
import { Outlet, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserInfoAPI } from '../api/auth';
import { setUserData } from '../redux/slices/authSlice';
import { toast } from 'react-toastify';

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

        dispatch(setUserData({ userId: data.id, nickname: data.nickname, avatar: data.avatar }))
        console.log('현재 로그인된 유저가 있나요?', data);
        console.log(userData);

    
      } catch (error) {
        console.error('유저 정보 가져오기 오류:', error);
        toast.error(error?.response?.data?.message);
        dispatch(setUserData(null));
       //navigate('/login');
        localStorage.removeItem('accessToken');
        navigate('/login');
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <>
      <Header />
      <Outlet /> 
    </>
  );
};

export default Layout;


