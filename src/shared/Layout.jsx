import styled from 'styled-components';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';

const LayoutDiv = styled.div`
  background-color: #a6c6cefb;
`;

const Layout = () => {
  return (
    <LayoutDiv>
      <Header />
      <Outlet />
    </LayoutDiv>
  );
};

export default Layout;
