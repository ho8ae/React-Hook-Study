import styled from "styled-components";
import React from 'react';

const MainBody = styled.div`
    display: flex;
    background-color: #095c46;
    height: 100%;
    height: 2000px;
    align-items: center;
    justify-content: center;
`;

const MainContent = styled.div`
      color: white;
      font-size: 70px;
`;

const Content = () =>{
    return(
        <MainBody>
            <MainContent>
                안녕하세요 메인 바디입니다.    
            </MainContent>    
        </MainBody>
    );
}

export default Content;