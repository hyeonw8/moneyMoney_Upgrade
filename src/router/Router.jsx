//import { createBrowserRouter } from "react-router-dom"
import Layout from '../shared/Layout';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import LoginForm from '../components/Auth/LoginForm';
import SignUpForm from '../components/Auth/SignUpForm';
import MyPage from '../pages/MyPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PublicRoute = ({ element }) => {
  const isLogin = useSelector((state) => state.auth.accessToken);

  return !isLogin ? element : <Navigate to="/" />;
};

const PrivateRoute = ({element}) => {
  const isLogin = useSelector((state) => state.auth.accessToken);
  
  return isLogin ?  element : <Navigate to='/login' />;
}

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PrivateRoute element={<Home />} />} />
          <Route path="detail/:id" element={<PrivateRoute element={<Detail />} />} />
          <Route path="mypage"  element={<PrivateRoute element={<MyPage />} />} />
          <Route path="signup" element={<PublicRoute element={<SignUpForm />} />} />
          <Route path="login" element={<PublicRoute element={<LoginForm />} />} />
        </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
