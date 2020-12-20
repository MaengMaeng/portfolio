import React from 'react';
import styled from 'styled-components';
import picture from '../asset/person.png';
import Layout from '../components/Layout';
import History from '../components/History';

const Container = styled.div`
    display: flex;

    height:100%;
`;

const LeftDiv = styled.div`
    width: 40%;
    height: 100%;

    display: flex;
    box-sizing: border-box;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`;

const RightDiv = styled.div`
    width: 60%;
    height: 100%;

    display: flex;
    box-sizing: border-box;
    flex-direction: column;

    justify-content: center;
    align-items: flex-start;
`;

const Headshot = styled.img`
    width: 200px;
    height: 200px;
    margin: 20px 0 20px 0;
`;

const Name = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 40px;
    font-weight: bold;
`;

const Job = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: -0.07em;
`;

const IntroduceDiv = styled.div`
    margin-top: 30px;
    text-align: center;
`;

const Introduce = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
    font-weight: 300;
    display: block;
`;

const Highlight = styled.span`
    background: linear-gradient(transparent 70%, blue 70%, blue 85%, transparent 85%);
`;

const About = () => {
    const history = [
        [2020, [['2월', '1번 연혁', '~ 00.00'], ['4월', '2번 연혁', '~ 00.00'],['2월', '1번 연혁', '~ 00.00'], ['4월', '2번 연혁', '~ 00.00']]], 
        [2019, [['5월','1번 연혁', '~ 00.00'], ['7월','2번 연혁', '~ 00.00']]],
        [2018, [['7월','1번 연혁', '~ 00.00'], ['8월','2번 연혁', '~ 00.00'], ['9월','2번 연혁', '~ 00.00']]],
    ];
    return (
        <Layout>
            <Container>
                <LeftDiv>
                    <Headshot src={picture}/>
                    <Name>남궁명</Name>
                    <Job>프론트엔드 개발자</Job>
                    <IntroduceDiv>
                        <Introduce>안녕하세요!</Introduce>
                        <Introduce>노는게 제일 좋은</Introduce>
                        <Introduce><Highlight>베짱이</Highlight> 개발자입니다!</Introduce>
                    </IntroduceDiv>
                </LeftDiv>
                <RightDiv>
                    <Name>걸어온 길</Name>
                    <History history={history}></History>
                </RightDiv>
            </Container>
        </Layout>
    )
}

export default About;