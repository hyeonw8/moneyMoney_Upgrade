import styled from 'styled-components';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <StLayout>
      <Header />
      <Outlet />
    </StLayout>
  );
};

export default Layout;

const StLayout = styled.div`
  /* min-height: 100vh;
  max-width: 1200px;
  min-width: 780px;
  height: 100vh;
  width: 100vw;
  margin: 0 auto; */
`;
