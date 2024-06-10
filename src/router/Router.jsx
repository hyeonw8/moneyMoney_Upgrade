import { createBrowserRouter } from "react-router-dom"
import Layout from '../shared/Layout';
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import LoginForm from "../components/Auth/LoginForm";
import SignUpForm from "../components/Auth/SignUpForm";
import Auth from "../pages/Auth";


const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'auth',
        element: <Auth />,
        children: [
          {
            path: 'login',
            element: <LoginForm />
          },
          {
            path: 'signup',
            element: <SignUpForm />
          }
        ]
      },
      {
        path: '/detail/:id',
        element: <Detail />
      },
    ]
  }
]);


export default Router