import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
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

const Line = styled.span`
    color:white;
`;

const Name = styled.span`
    color:white;
    font-weight: bold;
`;

const Tag = styled.span`
    color:#4758fc;
`;

const Span = ({text1, text2, text3, text4, text5}) => {
    const [lineText, setLineText] = useState('');
    const [lineText2, setLineText2] = useState('');
    const [lineText3, setLineText3] = useState('');
    const [lineText4, setLineText4] = useState('');
    const [lineText5, setLineText5] = useState('');

    setTimeout(() => {
        if(lineText.length !== text1.length){
            setLineText(lineText + text1.split('')[lineText.length]);
        }
        else{
            if(lineText2.length !== text2.length){
                setLineText2(lineText2 + text2.split('')[lineText2.length]);
            }
            else{
                if(lineText3.length !== text3.length){
                    setLineText3(lineText3 + text3.split('')[lineText3.length]);
                }
                else{
                    if(lineText4.length !== text4.length){
                        setLineText4(lineText4 + text4.split('')[lineText4.length]);
                    }
                    else{
                        if(lineText5.length !== text5.length){
                            setLineText5(lineText5 + text5.split('')[lineText5.length]);
                        }
                    }
                }
            }
        }
    }, 300);

    return (
        <Container>
            <Line>{lineText}</Line>
            {lineText.length === text1.length ? <br/> : ''}
            <Tag>{lineText2}</Tag>
            <Name>{lineText3}</Name>
            <Tag>{lineText4}</Tag>
            <Line>{lineText5}</Line>
            <KeyboardCursor>|</KeyboardCursor>
        </Container>
    )
};

export default Span;