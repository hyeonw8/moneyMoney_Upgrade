import styled from 'styled-components';
import Header from '../shared/Header';

const LayoutDiv = styled.div`
  background-color: #a6c6cefb;
`;

const Layout = ({ children }) => {
  return (
    <LayoutDiv>
      <Header />
      {children}
    </LayoutDiv>
  );
};

export default Layout;
