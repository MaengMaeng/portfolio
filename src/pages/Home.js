import React from 'react';
import Layout from '../components/Layout';
import Span from '../components/Span';
import styled from 'styled-components';


const Container = styled.div`
    background: #252525;

    height: 100%;
    width: 100%;

    display: flex;

    justify-content: center;
    align-items: center;

    font-size: 60px;
`;
const Home = () => {
    const text1 = '안녕하세요!';
    const text2 = '<';
    const text3 = '남궁명';
    const text4 = '/>';
    const text5 = '의 포트폴리오 입니다!';

    return (
        <Layout>
            <Container>
                <Span text1={text1} text2={text2} text3={text3} text4={text4} text5={text5}></Span>
            </Container>
        </Layout>
    )
}

export default Home;