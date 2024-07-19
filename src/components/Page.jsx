import React from 'react';
import Header from './Header'
import Content from './Content';
import Footer from './Footer'
import styled from 'styled-components';

const MainPage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;


const Page = () =>{
    return(
        <MainPage>
            <Header />
            <Content/>
            <Footer  />
        </MainPage>
    );
}

export default Page;