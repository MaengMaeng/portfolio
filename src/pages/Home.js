import React, { useState } from 'react';
import {Layout, Text} from '../components/Styled';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    background: #252525;

    height: 100%;
    width: 100%;

    display: flex;

    justify-content: center;
    align-items: center;

    font-size: 60px;

    text-align: center;
`;

const Blink = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
`;

const KeyboardCursor = styled.span`
    color:grey;
    
    font-size: 80px;

    animation: ${Blink} 1s step-end infinite;
`;


const Home = () => {
    const text1 = '안녕하세요!';
    const text2 = '<';
    const text3 = '남궁명';
    const text4 = '/>';
    const text5 = '의 포트폴리오 입니다!';

    const [lineText1, setLineText1] = useState('');
    const [lineText2, setLineText2] = useState('');
    const [lineText3, setLineText3] = useState('');
    const [lineText4, setLineText4] = useState('');
    const [lineText5, setLineText5] = useState('');

    setTimeout(() => {
        console.log(1);
        if(lineText1.length !== text1.length){
            setLineText1(lineText1 + text1.split('')[lineText1.length]);
            return;
        }
        if(lineText2.length !== text2.length){
            setLineText2(lineText2 + text2.split('')[lineText2.length]);
            return;
        }
        if(lineText3.length !== text3.length){
            setLineText3(lineText3 + text3.split('')[lineText3.length]);
            return;
        }
        if(lineText4.length !== text4.length){
            setLineText4(lineText4 + text4.split('')[lineText4.length]);
            return;
        }
        if(lineText5.length !== text5.length){
            setLineText5(lineText5 + text5.split('')[lineText5.length]);
            return;
        }
    }, 300);

    return (
        <Layout>
            <Container>
                <div>
                    <Text>{lineText1}</Text>
                    {lineText1.length === text1.length ? <div></div> : ''}
                    <Text className='tag'>{lineText2}</Text>
                    <Text className='bold'>{lineText3}</Text>
                    <Text className='tag'>{lineText4}</Text>
                    <Text>{lineText5}</Text>
                    <KeyboardCursor>|</KeyboardCursor>
                </div>
            </Container>
        </Layout>
    )
}

export default Home;