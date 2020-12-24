import React, { createRef } from 'react';
import styled from 'styled-components';

import { Layout, Text } from '../components/Styled';

import { MYTIME, PORTFOLIO, ODOC, MYHOME } from '../asset/projects';
import { KEYBOARD_ICON } from '../asset';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;
`;

const StyledSection = styled.div`
    /* width: 80%; */
    width: 100%;
    height: 100%;
    /* height: 80%; */

    display: flex;

    justify-content: center;
    align-items: center;
    /* flex-direction: column; */

    /* overflow-y: scroll; */
`;

const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
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

const ProjectItem = styled.div`
    /* width: calc(30% - 80px);
    padding-bottom: calc(30% - 80px); */
    
    /* width: calc(100%/3 - 2%);
    padding-bottom: calc(100%/3 - 2%);
    margin: 1%; */
    
    width: calc(100%/2 - 10%);
    padding-bottom: calc(100%/2 - 10%);
    margin: 2.5% 5% 2.5% 5%;
    
    height: 0;


    /* margin: 40px 0 40px 0; */

    display: inline-flex;
    
    /* align-items: center; */
    /* justify-content: center; */

    position: relative;

    /* background: white; */
`;

const ProjectItemInfo = styled.div`
    position: absolute;
    width: 100%;
    height: 30%;

    top: 70%;
    /* background: rgba(255,255,255,0.2); */
    background: rgba(0,0,0,0.3);
`;

const Browser = styled.div`
    box-sizing: border-box;
    border: 4px solid #4d4d4d;
    width: 100%;
    /* height: 100%; */

    display: flex;
    flex-direction: column;

    position: absolute;
    overflow: hidden;

    border-radius: 16px;

    top: 50%;
    transform: translateY(-50%);
    
    /* bottom: 0; */
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

const Projects = () => {
    const projects = [
        ['포트폴리오', PORTFOLIO],
        ['MyTime', MYTIME],
        ['ODOC', ODOC],
        ['MyHome-Frontend', MYHOME],
        // ['내 친구를 소개합니다.']
    ];

    const layout = createRef();

    const onClickHandle = (i) => {
        if(i === projects.length - 1){
            layout.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else{
            layout.current.scrollTo({ top: (layout.current.scrollHeight /projects.length)*(i+1), behavior: 'smooth' });
        }
    }

    return (
        <Layout ref={layout}>
            {
                projects.map((v, i) => (
                    <Container key={i} onClick={() => onClickHandle(i)}>
                        <StyledSection>
                            <ProjectList>
                        <Text className='h1'><Text className='tag'>{'<'}</Text>{v[0]}<Text className='tag'>{'/>'}</Text></Text>
                                <ProjectItem>
                                    <Browser>
                                        <SearchBar>
                                            <SearchIcon className='a'></SearchIcon>
                                            <SearchIcon className='b'></SearchIcon>
                                            <SearchIcon className='c'></SearchIcon>

                                            <SearchText></SearchText>
                                        </SearchBar>
                                        <BrowserContent src={v[1] || KEYBOARD_ICON}></BrowserContent>
                                    </Browser>
                                    {/* <ProjectItemInfo className='info'>
                                        {v[0]}
                                    </ProjectItemInfo> */}
                                </ProjectItem>
                            </ProjectList>

                        </StyledSection>
                    </Container>
                ))
            }
        </Layout>
    )
}

export default Projects;