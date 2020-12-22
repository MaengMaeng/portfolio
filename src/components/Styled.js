import styled from 'styled-components';

export const Layout = styled.div`
    margin-left:300px;
    
    width: calc(100% - 300px) !important;
    height: 100%;

    position: relative !important;
    overflow: hidden !important;

    background: #252525;
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