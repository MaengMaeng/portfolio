import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import BlogIcon from '../asset/blog-white.png';
import GithubIcon from '../asset/github-white.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    background: #252525;

    width: 300px;
    height: 100%;

    justify-content: space-between;
    align-items: center;
`;

const Container1 = styled.div`
    margin: 40px 0 40px 0;
    display: flex;
    flex-direction: column;

    width: 300px;

    align-items: center;
`;

const HomeLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    width: 60%;
    margin: 20px 0 20px 0;
`;

const HomeHighlight = styled.span`
    color: #4758fc;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    width: 60%;
    margin: 20px 0 20px 0;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover{
        background: linear-gradient(transparent 60%, #4758fc 60%, #4758fc 85%, transparent 85%);
    }

    background: ${props => props.selected ? 'linear-gradient(transparent 60%, #4758fc 60%, #4758fc 85%, transparent 85%)' : 'none'};
`;

const Container2 = styled.div`
    display: flex;

    justify-content: center;
    width: 300px;

    margin-bottom: 20px;
`;

const ImgContainer = styled.div`
    background: rgba(0, 0, 0, 0);
    border: 2px solid white;
    border-radius: 8px;
    padding: 4px 4px 0 4px;
    margin: 8px;
`;

const Icon = styled.img`
    width:40px;
    height:40px;

    margin: 0;
    padding: 0;
`;

const SideBar = () => {
    const [index, setIndex] = useState('');

    const links = [['/about', 'About'], ['/projects', 'Projects'], ['/contact', 'Contact']];
    return (
        <Container>
            <HomeLink to='/' onClick={() => setIndex('')}>
                <HomeHighlight>
                    {'<'} 
                </HomeHighlight>
                명 
                <HomeHighlight>
                    {'/>'}
                </HomeHighlight>
                </HomeLink>
            <Container1>
                {
                    links.map((link, i) => 
                        <StyledLink key={link[0]} to={link[0]} selected={index === i} onClick={() => setIndex(i)}>{link[1]}</StyledLink>    
                    )
                }
            </Container1>
            <Container2>
                <ImgContainer>
                    <Icon src={BlogIcon}></Icon>
                </ImgContainer>
                <ImgContainer>
                    <Icon src={GithubIcon}></Icon>
                </ImgContainer>
            </Container2>
        </Container>
    )
}

export default SideBar;