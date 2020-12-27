import React, { createRef } from 'react';
import styled from 'styled-components';

import { Layout, Text } from '../components/Styled';

import { MYTIME, PORTFOLIO, ODOC, MYHOME } from '../asset/projects';
import { CHECK_WHITE_ICON } from '../asset';
import { HTML_ICON, CSS_ICON, JS_ICON, REACT_ICON, VUE_ICON, NODE_ICON } from '../asset/skills';

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

const ProjectList = styled.div`
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;

    /* justify-content: space-between; */
    justify-content: center;
    align-items: center;
    align-content: space-around;

    width: 100%;
    height: 100%;

    /* overflow: hidden; */
    /* overflow: scroll; */
`;

const ProjectItemPicture = styled.div`
    /* width: calc(100% - 10%);
    padding-bottom: calc(100% - 10%);
    margin: 2.5% 5% 2.5% 5%; */
    
    width: 100%;

    height: 0;

    display: inline-flex;
    position: relative;
`;

const ProjectItemInfo = styled.div`
    width: 50%;
    height: 100%;
    background: rgba(0,0,0,1);

    color: white;
`;

const Browser = styled.div`
    box-sizing: border-box;
    border: 4px solid #4d4d4d;
    width: 100%;

    display: flex;
    flex-direction: column;

    position: absolute;
    overflow: hidden;

    border-radius: 16px;

    top: 50%;
    transform: translateY(-50%);
`;

const SearchBar = styled.div`
    background: #4d4d4d;

    /* height: 20px; */

    display: flex;

    align-items: center;

    padding: 4px;
`;

const SearchIcon = styled.div`
    width: 12px;
    height: 12px;

    border-radius: 50%;

    margin: 6px;

    &.a{
        background: #f7595c;
    }
    &.b{
        background: #fcce3f;
    }
    &.c{
        background: #38cd49;
        
    }
`;

const SearchText = styled.div`
    margin: 0 16px 0 16px;
    flex-grow: 1;
    border-top: 4px solid white;
`;

const BrowserContent = styled.img`
    width: 100%;
`;

const ProjectName = styled.div`
    width: 100%;
    height: 20%;

    display: flex;
    align-items: center;
`;

const StyledButton = styled.button`
    width: 80px;
    height: 60px;
    
    border: 2px solid white;
    border-radius: 8px;
    margin: 4px;

    background-color: white;
    
    transition-property: color, background-color;
    transition-duration: 0.5s;
    transition-timing-function: ease;

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

const Projects = () => {
    const projects = [
        ['포트폴리오', PORTFOLIO, '포트폴리오 입니다.', [HTML_ICON, CSS_ICON, JS_ICON, REACT_ICON]],
        ['MyTime', MYTIME,'',[HTML_ICON, CSS_ICON, JS_ICON]],
        ['ODOC', ODOC,'',[HTML_ICON, CSS_ICON, JS_ICON, REACT_ICON, NODE_ICON]],
        ['MyHome', MYHOME, '', [HTML_ICON, CSS_ICON, JS_ICON, VUE_ICON]],
        // ['내 친구를 소개합니다.']
    ];

    const layout = createRef();

    const onClickHandle = (i) => {
        if (i === projects.length - 1) {
            layout.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else {
            layout.current.scrollTo({ top: (layout.current.scrollHeight / projects.length) * (i + 1), behavior: 'smooth' });
        }
    }

    return (
        <Layout ref={layout}>
            {
                projects.map((v, i) => (
                    <Container key={i} onClick={() => onClickHandle(i)}>
                        <StyledSection className='left'>
                            <Layered className='center'>
                                <ProjectItemPicture>
                                    <Browser>
                                        <SearchBar>
                                            <SearchIcon className='a'></SearchIcon>
                                            <SearchIcon className='b'></SearchIcon>
                                            <SearchIcon className='c'></SearchIcon>

                                            <SearchText></SearchText>
                                        </SearchBar>
                                        <BrowserContent src={v[1]}></BrowserContent>
                                    </Browser>
                                </ProjectItemPicture>

                            </Layered>
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
                                    <StyledButton class='demo'>DEMO</StyledButton>
                                    <StyledButton class='code'>CODE</StyledButton>
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