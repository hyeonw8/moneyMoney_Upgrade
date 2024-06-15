import Layout from '../shared/Layout';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import LoginForm from '../components/Auth/LoginForm';
import SignUpForm from '../components/Auth/SignUpForm';
import MyPage from '../pages/MyPage';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PublicRoute = () => {
  const isLogin = useSelector((state) => state.auth.accessToken);

  return !isLogin ?  <Outlet /> : <Navigate to="/" />;
};

const PrivateRoute = () => {
  const isLogin = useSelector((state) => state.auth.accessToken);
  
  return isLogin ?  <Outlet /> : <Navigate to='/login' />;
}

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PrivateRoute />}>
              <Route index element={<Home />}/>
              <Route path="detail/:id" element={<Detail />} />
              <Route path="mypage"  element={<MyPage />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="signup" element={<SignUpForm />} />
              <Route path="login" element={<LoginForm />} />
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
