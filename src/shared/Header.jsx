import styled from 'styled-components';

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 10px;
  margin: 0 auto;
  width: 100vw;
  max-width: 1200px;
  min-width: 780px;
`;
const HeaderTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
`;
const HeaderP = styled.p`
  font-size: 15px;
  font-weight: bold;
  padding: 20px;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderTitle>✐ keep a record of household expenses </HeaderTitle>
      <HeaderP>React</HeaderP>
    </HeaderDiv>
  );
};

export default Header;
