import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { Outlet, redirect, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AUTH_QUERY_KEY, getUserInfoAPI2 } from '../api/authAPI';
import { logout, setUserData } from '../redux/slices/authSlice';
import Header from '../shared/Header';

const Layout = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const {
    data: fetchUserInfo,
    isFetching,
    isError,
    error
  } = useQuery({
    queryKey: [AUTH_QUERY_KEY],
    queryFn: getUserInfoAPI2,
    enabled: !!localStorage.getItem('accessToken') && location.pathname !== '/login',
    retry: false
  });

  if (location.pathname !== '/login' && !localStorage.getItem('accessToken')) {
    window.location.replace('/login');
    return;
  }

  if (isFetching) {
    return <div>로딩 중</div>;
  }

  if (isError) {
    if (error && error.response && error.response.status === 401) {
      toast.error(
        <div>
          토큰이 만료되었습니다.
          <br />
          다시 로그인해주세요!
        </div>
      );
    } else {
      toast.info('로그인 이후 이용이 가능합니다!');
    }
    dispatch(logout());
    localStorage.removeItem('accessToken');
    window.location.replace('/login');
    return;
  }

  if (fetchUserInfo) {
    dispatch(
      setUserData({
        userId: fetchUserInfo.id,
        nickname: fetchUserInfo.nickname,
        avatar: fetchUserInfo.avatar
      })
    );
    console.log('fetch', fetchUserInfo)
  }

  //   console.log('데이터 잘 받아오고 있는 지 layout에서 확인 중:', fetchUserInfo)

  // useEffect(() => {
  //   const fetchUserInfo = async () => {
  //     try {
  //       const response = await getUserInfoAPI();
  //       const data = response.data;

  //       if (data.success) {
  //         dispatch(setUserData({ userId: data.id, nickname: data.nickname, avatar: data.avatar }));
  //         console.log('layout에서 데이터 확인중', data)
  //       } else {
  //         //throw
  //         dispatch(logout());
  //         localStorage.removeItem('accessToken');
  //         navigate('/login');
  //       }
  //     } catch (error) {
  //       if (error.response && error.response.status === 401) {
  //         toast.error(<div>
  //           토큰이 만료되었습니다.
  //           <br />
  //           다시 로그인해주세요!
  //         </div>);
  //       } else {
  //         toast.info('로그인 이후 이용이 가능합니다!');
  //       }
  //       dispatch(logout());
  //       localStorage.removeItem('accessToken');
  //       navigate('/login');
  //     }
  //   };

  //   fetchUserInfo();
  // }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
