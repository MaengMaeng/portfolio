import React, { useState } from 'react';
import styled from 'styled-components';
import picture from '../asset/user.png';
import keyboard from '../asset/keyboard.png';
import Layout from '../components/Layout';

import {HTML_ICON, CSS_ICON, JS_ICON, REACT_ICON, VUE_ICON, NODE_ICON} from '../asset/skills';
import CHECK_ICON from '../asset/check-white.png';

import './About.css';

// import History from '../components/History';

const Container = styled.div`
    display: flex;

    background: #252525; 
    /* background: ${props => props.bg}; */
    height:100%;
    width: 100%;

    position: absolute;
`;

const FullDiv = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    box-sizing: border-box;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    color:white;
`;

const LeftDiv = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    box-sizing: border-box;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    color:white;
`;

const RightDiv = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    box-sizing: border-box;
    flex-direction: column;

    justify-content: center;
    align-items: flex-start;

    color:white;
`;

const Headshot = styled.img`
    width: 250px;
    height: 250px;
    margin: 20px 0 60px 0;
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

const IntroduceDiv1 = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
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

const Tag = styled.span`
    color:#4758fc;
`;

const Layered = styled.div`
    height: 70%;
    width: 70%;

    border: 2px solid white;
    border-radius: 20px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`;

const Layered1 = styled.div`
    height: 70%;
    width: 70%;

    /* border: 2px solid white; */
    /* border: 3px solid #4758fc; */
    border-radius: 20px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    overflow: hidden;

    /* background: #4758fc; */
    /* justify-content: center; */
    /* align-items: center; */
`;

const Keyboard = styled.img`
    margin: 0 0 4px 8px;
    width: 28px;
    height: 28px;
`;
const NameDiv = styled.div`
    margin: 4px;
`;
const ContentsDiv = styled.div`
    /* background: white; */
    overflow: hidden;
    color:white;

    /* border-radius */
    flex-grow: 1;
    /* border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px; */
`;

const SkillHeader = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;

    color:white;
`;

const SkillHeaderIcon = styled.img`
    width:30px;
    height:30px;

    margin: 0 16px 0 0;
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
    
    /* border: 4px solid white; */
    background: #252525;
    /* border-radius: 10%; */

    display: inline-flex;
    margin: 10px 30px 10px 30px;

    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const SkillsIcon = styled.img`
    height: 80px;
    width: 80px;
`;

const About = () => {
    const [visible, setVisible] = useState('true');
    
    const history = [
        [2019, [['9월','청년 TLO', '~ 2019.11'], ['12월','카카오 인턴', '~ 2020.02']]],
        [2018, [['12월','SSAFY', '~ 2019.07']]],
        [2013, [['3월','충남대학교 (컴퓨터 공학과)', '~ 2019.03']]],
        [2010, [['3월','부여 고등학교', '~ 2013.02']]],
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

    return (
        <Layout className={'layout'}>
            <Container className={visible?'current down' : 'up-out'} onClick={() => setVisible(!visible)} bg={'#60d7a9'}>
                <LeftDiv>
                    <Layered>
                        <Headshot src={picture}/>
                        <Name><Tag>{'<'}</Tag>남궁명<Tag>{'/>'}</Tag></Name>
                        <Job>프론트엔드 개발자</Job>
                        <IntroduceDiv>
                            <Introduce>안녕하세요!</Introduce>
                            <Introduce>개발이 제일 좋은</Introduce>
                            <IntroduceDiv1>
                                <Introduce><Highlight>베짱이</Highlight> 개발자입니다!</Introduce>
                                <Keyboard src={keyboard}></Keyboard>
                            </IntroduceDiv1>
                        </IntroduceDiv>

                    </Layered>
                </LeftDiv>
                <RightDiv>
                <Layered1>
                    <NameDiv>
                        <Name><Tag>{'<'}</Tag>Skills<Tag>{'/>'}</Tag></Name>
                    </NameDiv>

                    <ContentsDiv>
                        <SkillHeader>
                            <SkillHeaderIcon src={CHECK_ICON}></SkillHeaderIcon>
                            <Job>
                                {/* <Highlight>FRONT</Highlight> END */}
                                FRONT END
                            </Job>
                            <SkillHeaderLine></SkillHeaderLine>
                        </SkillHeader>
                        {
                            frontend.map((v, i) => (
                                <SkillsDiv key={i}>
                                    <SkillsIcon src={v[1]}></SkillsIcon>
                                </SkillsDiv>
                            ))
                        }
                    </ContentsDiv>
                    <ContentsDiv>
                        <SkillHeader>
                            <SkillHeaderIcon src={CHECK_ICON}></SkillHeaderIcon>
                            <Job>
                                {/* <Highlight>FRONT</Highlight> END */}
                                BACK END
                            </Job>
                            <SkillHeaderLine></SkillHeaderLine>
                        </SkillHeader>
                        {
                            backend.map((v, i) => (
                                <SkillsDiv key={i}>
                                    <SkillsIcon src={v[1]}></SkillsIcon>
                                </SkillsDiv>
                            ))
                        }
                    </ContentsDiv>
                    {/* <Name>걸어온 길</Name>
                    <History history={history}></History> */}
                </Layered1>

                </RightDiv>
            </Container>
            <Container className={(!visible?'current up' : 'down-out')} onClick={() => setVisible(!visible)} bg={'#7bb7fa'}>
                <FullDiv>
                    <Layered1>
                        <NameDiv>
                            <Name><Tag>{'<'}</Tag>History<Tag>{'/>'}</Tag></Name>
                        </NameDiv>
                        <ContentsDiv>
                            {
                                history.map((v, i) => (
                                    <div className='history' key={i}>
                                        <SkillHeader>
                                            <SkillHeaderIcon src={CHECK_ICON}></SkillHeaderIcon>
                                            <Job>
                                                {v[0]}
                                            </Job>
                                            <SkillHeaderLine></SkillHeaderLine>
                                        </SkillHeader>
    
                                        {
                                            v[1].map((vv, ii) => (
                                                <div className='history-line' key={`${i}${ii}`}>
                                                    <div className='history-month'>
                                                        {vv[0]}
                                                    </div>
                                                    <div className='history-info'>
                                                        {vv[1]}
                                                    </div>
                                                    <div className='history-end'>
                                                        {vv[2]}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </ContentsDiv>
                    </Layered1>
                </FullDiv>
            </Container>
        </Layout>
    )
}

export default About;