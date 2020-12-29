import React, { createRef } from 'react';
import styled from 'styled-components';

import { Layout, Text, StyledButton } from '../components/Styled';
import SlideImage from '../components/SlideImage';
import ScrollButton from '../components/ScrollButton';

import { CHECK_WHITE_ICON } from '../asset/icon';
import { HTML_ICON, CSS_ICON, JS_ICON, REACT_ICON, VUE_ICON, NODE_ICON } from '../asset/skills';

import { PORTFOLIO_HOME, PORTFOLIO_ABOUT} from '../asset/projects/portfolio';
import { ODOC_HOME } from '../asset/projects/odoc';
import { MYTIME_HOME } from '../asset/projects/mytime';
import { MYHOME_HOME } from '../asset/projects/myhome';

const Container = styled.div`
    display: flex;

    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;
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

const Projects = () => {
    /*
        [이름, 사진[], 설명, 사용기술[], 데모링크, 코드링크]
    */
    const projects = [
        ['포트폴리오', [PORTFOLIO_HOME, PORTFOLIO_ABOUT], '포트폴리오 입니다.', [HTML_ICON, CSS_ICON, JS_ICON, REACT_ICON], '', ''],
        ['ODOC', [ODOC_HOME], '', [HTML_ICON, CSS_ICON, JS_ICON, REACT_ICON, NODE_ICON]],
        ['MyTime', [MYTIME_HOME], '', [HTML_ICON, CSS_ICON, JS_ICON], '', ''],
        ['MyHome', [MYHOME_HOME], '', [HTML_ICON, CSS_ICON, JS_ICON, VUE_ICON]],
    ];

    const layout = createRef();

    const onClickHandle = (i) => {
        const unit = layout.current.scrollHeight / projects.length;

        layout.current.scrollTo({ top: unit * i, behavior: 'smooth' });
    }

    return (
        <Layout ref={layout}>
            <ScrollButton layout={layout} number={projects.length}></ScrollButton>
            
            {
                projects.map((v, i) => (
                    <Container key={i} onClick={() => onClickHandle(i)}>
                        <StyledSection className='left'>
                            <SlideImage images={v[1]}></SlideImage>
                        </StyledSection>
                        <StyledSection className='right'>
                            <Layered>
                                <StyledDiv>
                                    <Text className='h1'><Text className='tag'>{'<'}</Text>{v[0]}<Text className='tag'>{'/>'}</Text></Text>
                                </StyledDiv>

                                <StyledDiv className='contents'>
                                    <SkillHeader>
                                        <StyledImg className='header' src={CHECK_WHITE_ICON}></StyledImg>
                                        <Text className='h2'>Description</Text>
                                        <SkillHeaderLine></SkillHeaderLine>
                                    </SkillHeader>
                                    <Text>{v[2]}</Text>
                                </StyledDiv>
                                <StyledDiv className='contents'>
                                    <SkillHeader>
                                        <StyledImg className='header' src={CHECK_WHITE_ICON}></StyledImg>
                                        <Text className='h2'>Skills</Text>
                                        <SkillHeaderLine></SkillHeaderLine>
                                    </SkillHeader>
                                    {
                                        v[3].map((img, i) => (
                                            <SkillsDiv key={i}>
                                                <StyledImg className='skill' src={img}></StyledImg>
                                            </SkillsDiv>
                                        ))
                                    }
                                </StyledDiv>
                                <StyledDiv className='contents'>
                                    <SkillHeader>
                                        <StyledImg className='header' src={CHECK_WHITE_ICON}></StyledImg>
                                        <Text className='h2'>Demo</Text>
                                        <SkillHeaderLine></SkillHeaderLine>
                                    </SkillHeader>
                                    <StyledButton className='demo'>DEMO</StyledButton>
                                    <StyledButton className='code'>CODE</StyledButton>
                                </StyledDiv>
                            </Layered>
                        </StyledSection>
                    </Container>
                ))
            }
        </Layout>
    )
}

export default Projects;