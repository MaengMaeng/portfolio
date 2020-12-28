import styled from 'styled-components';

export const Layout = styled.div`
    margin-left:300px;
    
    width: calc(100% - 300px) !important;
    height: 100%;

    position: relative !important;
    /* overflow: hidden !important; */
    overflow-y: scroll;

    background: #252525;

    ::-webkit-scrollbar { width: 5.2px; } /* 스크롤 바 */
    ::-webkit-scrollbar-track { background-color:rgba(0,0,0,0); } /* 스크롤 바 밑의 배경 */
    ::-webkit-scrollbar-thumb { background: #4758fc; border-radius: 10px; } /* 실질적 스크롤 바 */
    /* ::-webkit-scrollbar-thumb:hover { background: #404040; } 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
    /* ::-webkit-scrollbar-thumb:active { background: #808080; } 실질적 스크롤 바를 클릭할 때 */
    ::-webkit-scrollbar-button { display: none; } /* 스크롤 바 상 하단 버튼 */
`;

export const Text = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    color: ${props => props.color || 'white'};

    &.bold{
        font-weight: bold;
    }

    &.h1{
        font-size: 40px;
        font-weight: bold;
    }

    &.h2{
        font-size: 20px;
        font-weight: 300;
        letter-spacing: -0.07em;
    }

    &.tag{
       color:#4758fc;
    }

    &.underline{
        background: linear-gradient(transparent 70%, #4758fc 70%, #4758fc 85%, transparent 85%);
    }

    &.introduce{
        font-size: 18px;
        font-weight: 300;
        display: block;
    }
`;

export const StyledButton = styled.button`
    width: 80px;
    height: 60px;
    
    border: none;
    border-radius: 8px;
    margin: 4px;

    background-color: white;
    
    transition-property: color, background-color;
    transition-duration: 0.5s;
    transition-timing-function: ease;

    font-size: 20px;
    font-weight: bold;
    
    color: black;

    &:hover{
        background-color: #4758fc;

        color:white;
    }

    &.demo{

    }

    &.code{

    }
`;