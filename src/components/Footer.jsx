import styled from "styled-components";
import React, { useState } from "react";

const MainFooter = styled.div`
  background-color: ${({ isDark }) => (isDark ? 'black' : 'gray')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const FooterContent = styled.div`
  color: aliceblue;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 30px;
`;

const MoodChangeBtn = styled.button`
  border: 1px solid black;
  background-color: ${({ isDark }) => (isDark ? 'black' : 'lightgray')};
  color: ${({ isDark }) => (isDark ? 'white' : 'black')};
`;

const Point = styled.div`
  position: fixed;
  left: 88%;
  bottom: 5%;
`;

const Footer = ({ isDark, setIsDark }) => {
  return (
    <MainFooter isDark={isDark}>
      <FooterContent>
        안녕하세요 Footer 입니다.
      </FooterContent>
      <Point>
        <MoodChangeBtn isDark={isDark} onClick={() => setIsDark(!isDark)}>
          Dark mood
        </MoodChangeBtn>
      </Point>
    </MainFooter>
  );
}


export default Footer;
