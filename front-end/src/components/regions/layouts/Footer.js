import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <FooterContainter></FooterContainter>;
};

export default Footer;

//Footer container styling
const FooterContainter = styled.header`
  background: blue;
  height: 4rem;
  width: 100%;
  color: white;
  position: fixed;
  bottom: 0;
`;
