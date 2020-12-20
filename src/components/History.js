import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    /* height: 100%; */
    border: 4px solid black;
    border-radius: 20px;

    padding: 20px;
`;
const Container1 = styled.div`
    display: flex;

    /* align-items: flex-start; */
`;

const Year = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 32px;
    font-weight: bold;
    line-height: 32px;
    margin-right: 20px;

    background: linear-gradient(transparent 70%, ${props => props.color} 70%, ${props => props.color} 80%, transparent 80%);

    /* color: ${props => props.color}; */
`;

const Content = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
    display: block;
`;

const Container2 = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    margin-right: 20px;
`;

const Container3 = styled.div`
    margin: 15px 0 15px 0;
    padding: 15px 0 0 0;
    border-top: 2px #aaa dotted;
`;

const Circle = styled.div`
    width: 10px;
    height: 10px;

    border-radius: 50%;
    border: 5px solid ${props => props.color};
`;

const VerticalLine = styled.div`
    width:1px;
    border-left:4px solid #ddd;

    flex-grow: 1;
`;

const History = ({history}) => {
    const yearColor = ['red', 'blue', 'green'];
    // const circleColor = [''];
    // const monthColor = [];

    return (
        <Container>
            {history.map((h, i) => 
                <Container1>
                    <div>
                        <Year color={yearColor[i%3]}>
                            {h[0]}
                        </Year>
                    </div>
                    <Container2>
                        <Circle></Circle>
                        <VerticalLine></VerticalLine>
                    </Container2>
                    <Container3>
                        {h[1].map((v, j) => 
                            <Content>{v[0]}, {v[1]}, {v[2]}</Content>
                        )}
                    </Container3>
                </Container1>
            )}
        </Container>
    )
};

export default History;