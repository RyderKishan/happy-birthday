import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderContainer>
    <div className="info">Neave</div>
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  height: 5rem;
  position: sticky;
  top: 0;
  background: #424242;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div.info {
    padding: 0 2rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export default Header;
