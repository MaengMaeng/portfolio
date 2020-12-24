import React, { createRef, useState } from 'react';
import styled from 'styled-components';

import { Layout, Text } from '../components/Styled';

import { KEYBOARD_ICON, USER_ICON, CHECK_WHITE_ICON } from '../asset';
import { HTML_ICON, CSS_ICON, JS_ICON, REACT_ICON, VUE_ICON, NODE_ICON } from '../asset/skills';

import './About.css';

// import History from '../components/History';

const Container = styled.div`
    display: flex;

    background: #252525; 
    height:100%;
    width: 100%;

    /* position: absolute; */
`;

const StyledSection = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    box-sizing: border-box;
    flex-direction: column;

    justify-content: center;

    color:white;

    &.left{
        align-items: center;
    };

    &.right{
        align-items: flex-start;
    };

    &.full{
        width: 100%;
        align-items: center;
    }
`;

const StyledDiv = styled.div`
    &.introduce{
        margin-top: 30px;
        text-align: center;
    }

    &.info{
        display: flex;

        justify-content: center;
        align-items: center;
    }

    &.contents{
        overflow: hidden;
        flex-grow: 1;
    }
`;

const Layered = styled.div`
    height: 70%;
    width: 70%;
    
    display: flex;
    flex-direction: column;
    
    border-radius: 20px;
    
    box-sizing: border-box;
    
    &.border{
        border: 2px solid white;
    }
    
    &.center{
        justify-content: center;
        align-items: center;
    }
`;

const StyledImg = styled.img`
    &.headshot{
        width: 250px;
        height: 250px;
        margin: 20px 0 60px 0;
    }

    &.info{
        margin: 0 0 4px 8px;
        width: 28px;
        height: 28px;      
    }

    &.header{
        width:30px;
        height:30px;

        margin: 0 16px 0 0;
    }

    &.skill{
        height: 80px;
        width: 80px;
    }
`;

const SkillHeader = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;

    color:white;
`;

const SkillHeaderLine = styled.div`
    margin: 0 0 0 16px;
    height:0px;
    border: 1px solid white;

    flex-grow: 1;
`;

const SkillsDiv = styled.div`
    height: 88px;
    width: 88px;
    
    padding: 4px;
    
    background: #252525;

    display: inline-flex;
    margin: 10px 30px 10px 30px;

    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const HistoryDiv = styled.div`
    display: flex;
    height: 30px;

    align-items: center;

    margin: 16px;

    &.year{
        display: block;
        height: auto;
        margin: 40px 0 40px 0;
    }

    &.month{
        width: 40px;

        justify-content: center;

        border-radius: 4px;
        background: #4758fc;
    }

    &.info{
        margin: 0 0 0 16px;
        padding: 0 0 0 8px;
        flex-grow: 1;

        border-radius: 4px;
    }

    &.end{
        margin: 0 16px 0 16px;
        padding: 0 8px 0 8px;

        border-radius: 4px;
        background: cornflowerblue;
    }
`;


const About = () => {
    const [visible, setVisible] = useState('true');

    const history = [
        [2019, [['9월', '청년 TLO', '~ 2019.11'], ['12월', '카카오 인턴', '~ 2020.02']]],
        [2018, [['12월', 'SSAFY', '~ 2019.07']]],
        [2013, [['3월', '충남대학교 (컴퓨터 공학과)', '~ 2019.03']]],
        [2010, [['3월', '부여 고등학교', '~ 2013.02']]],
    ];

    const frontend = [
        ['HTML', HTML_ICON],
        ['CSS', CSS_ICON],
        ['JavaScript', JS_ICON],
        ['React.js', REACT_ICON],
        ['Vue.js', VUE_ICON]
    ];

    const backend = [
        ['Node.js', NODE_ICON]
    ]

    const onClickHandle = (direction) => {
        console.log(layout.current.scrollTop);

        if (direction === 'up') {
            layout.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else {
            layout.current.scrollTo({ top: layout.current.scrollHeight, behavior: 'smooth' });
        }

        setVisible(visible);
    }

    const layout = createRef();

    return (
        <Layout className='layout' ref={layout}>
            {/* <Container className={visible?'down-in' : 'up-out'} onClick={() => setVisible(!visible)}> */}
            <Container onClick={() => onClickHandle('down')}>
                <StyledSection className='left'>
                    <Layered className='border center'>
                        <StyledImg className='headshot' src={USER_ICON} />
                        <Text className='h1'><Text className='tag'>{'<'}</Text>남궁명<Text className='tag'>{'/>'}</Text></Text>
                        <Text className='h2'>프론트엔드 개발자</Text>
                        <StyledDiv className='introduce'>
                            <Text className='introduce'>안녕하세요!</Text>
                            <Text className='introduce'>개발이 제일 좋은</Text>
                            <StyledDiv className='info'>
                                <Text className='introduce'><Text className='underline'>베짱이</Text> 개발자입니다!</Text>
                                <StyledImg className='info' src={KEYBOARD_ICON}></StyledImg>
                            </StyledDiv>
                        </StyledDiv>

                    </Layered>
                </StyledSection>
                <StyledSection className='right'>
                    <Layered>
                        <StyledDiv>
                            <Text className='h1'>
                                <Text className='tag'>{'<'}</Text>Skills<Text className='tag'>{'/>'}</Text>
                            </Text>
                        </StyledDiv>

                        <StyledDiv className='contents'>
                            <SkillHeader>
                                <StyledImg className='header' src={CHECK_WHITE_ICON}></StyledImg>
                                <Text className='h2'>
                                    FRONT END
                                </Text>
                                <SkillHeaderLine></SkillHeaderLine>
                            </SkillHeader>
                            {
                                frontend.map((v, i) => (
                                    <SkillsDiv key={i}>
                                        <StyledImg className='skill' src={v[1]}></StyledImg>
                                    </SkillsDiv>
                                ))
                            }
                        </StyledDiv>
                        <StyledDiv className='contents'>
                            <SkillHeader>
                                <StyledImg className='header' src={CHECK_WHITE_ICON}></StyledImg>
                                <Text className='h2'>
                                    BACK END
                                </Text>
                                <SkillHeaderLine></SkillHeaderLine>
                            </SkillHeader>
                            {
                                backend.map((v, i) => (
                                    <SkillsDiv key={i}>
                                        <StyledImg className='skill' src={v[1]}></StyledImg>
                                    </SkillsDiv>
                                ))
                            }
                        </StyledDiv>
                    </Layered>
                </StyledSection>
            </Container>
            {/* <Container className={(!visible?'up-in' : 'down-out')} onClick={() => setVisible(!visible)}> */}
            <Container onClick={() => onClickHandle('up')}>
                <StyledSection className='full'>
                    <Layered>
                        <StyledDiv>
                            <Text className='h1'><Text className='tag'>{'<'}</Text>History<Text className='tag'>{'/>'}</Text></Text>
                        </StyledDiv>
                        <StyledDiv>
                            {
                                history.map((year, i) => (
                                    <HistoryDiv className='year' key={i}>
                                        <SkillHeader>
                                            <StyledImg className='header' src={CHECK_WHITE_ICON}></StyledImg>
                                            <Text className='h2'>
                                                {year[0]}
                                            </Text>
                                            <SkillHeaderLine></SkillHeaderLine>
                                        </SkillHeader>

                                        {
                                            year[1].map((month, ii) => (
                                                <HistoryDiv key={`${i}${ii}`}>
                                                    <HistoryDiv className='month'>
                                                        <Text>{month[0]}</Text>
                                                    </HistoryDiv>
                                                    <HistoryDiv className='info'>
                                                        <Text>{month[1]}</Text>
                                                    </HistoryDiv>
                                                    <HistoryDiv className='end'>
                                                        <Text>{month[2]}</Text>
                                                    </HistoryDiv>
                                                </HistoryDiv>
                                            ))
                                        }
                                    </HistoryDiv>
                                ))
                            }
                        </StyledDiv>
                    </Layered>
                </StyledSection>
            </Container>
        </Layout>
    )
}

export default About;