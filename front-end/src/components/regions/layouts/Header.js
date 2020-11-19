import React from "react";
import styled from "styled-components";

//Header component
const Header = () => {
  return (
    <HeaderContainter>
      <h1>Lifestyle preference survey</h1>
    </HeaderContainter>
  );
};

export default Header;

//Header container styling
const HeaderContainter = styled.header`
  background: orange;
  height: 5rem;
  color: white;
  text-align: center;
`;
