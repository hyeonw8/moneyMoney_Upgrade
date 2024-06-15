import { useDispatch } from 'react-redux';
import Header from '../shared/Header';
import { Outlet, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserInfoAPI } from '../api/authAPI';
import { toast } from 'react-toastify';
import { logout, setUserData } from '../redux/slices/authSlice';

const Layout = () => {
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
        if (error.response && error.response.status === 401) {
          toast.error(<div>
            토큰이 만료되었습니다. 
            <br />
            다시 로그인해주세요!
          </div>);
        } else {
          toast.info('로그인 이후 이용이 가능합니다!');
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


