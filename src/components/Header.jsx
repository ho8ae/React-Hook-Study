import React,{useState} from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    
    justify-content: center;
    align-items: center;
    color: white;
    font-family: 'Courier New', Courier, monospace;
    font-size: 50px;
   
`;

const ChangeBtn = styled.button`
    justify-content: flex-end;
    
    border-radius: 20px;
    border: 1px solid black;
    background-color: black;
    color: white;
`;

const StartHeader = styled.div`
  background-color : ${({ isDark }) => (isDark ? 'black' : 'lightgray')};
  display  :flex ;
  justify-content: space-between;
  align-items: center;
`;

const HeaderUl = styled.ul`
  display: flex;
  
  li{
    color: white;
    margin-right: 60px;
  }
`;



const Header = ({isDark}) =>{
    const [logo,setLogo] = useState("김태호");

    return(
        <StartHeader>
            
            <StyledHeader>
            {logo}
            </StyledHeader>
            <HeaderUl>
                <li>Commu</li>
                <li>Commu</li>
                <li>Commu</li>
                <li>Commu</li>
            </HeaderUl>

            <ChangeBtn onClick={() => {
                return setLogo("noo")
            }}>LogoChange</ChangeBtn>
        </StartHeader>
    );
}

export default Header;