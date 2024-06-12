//import { createBrowserRouter } from "react-router-dom"
import Layout from '../shared/Layout';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import LoginForm from '../components/Auth/LoginForm';
import SignUpForm from '../components/Auth/SignUpForm';
import MyPage from '../pages/MyPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import Auth from '../pages/Auth';

// const Router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'auth',
//         element: <Auth />,
//         children: [
//           {
//             path: 'login',
//             element: <LoginForm />
//           },
//           {
//             path: 'signup',
//             element: <SignUpForm />
//           }
//         ]
//       },
//       {
//         path: '/detail/:id',
//         element: <Detail />
//       },
//       {
//         path: 'mypage',
//         element: <PrivateRoute />,
//         children: [
//           {
//             path: '',
//             element: <MyPage />,
//           },
//         ],
//       },
//     ]
//   }
// ]);

// const PublicRoute = ({element}) => {
//   const isLogin = useSelector((state) => state.auth.accessToken);
  
//   return isLogin ? <Navigate to='/' /> : element;
// }

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
          <Route path="signup" element={<SignUpForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
