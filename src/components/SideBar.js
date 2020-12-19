import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    background: #000;

    width: 300px;
    height: 100%;

    align-items: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    width: 50%;
    margin: 20px 0 20px 0;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover{
        background: linear-gradient(transparent 60%, #f6303e 60%, #f6303e 85%, transparent 85%);
    }

    background: ${props => props.selected ? 'linear-gradient(transparent 60%, #f6303e 60%, #f6303e 85%, transparent 85%)' : 'none'};
`;

const SideBar = () => {
    const [index, setIndex] = useState(0);

    const links = [['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/contact', 'Contact']];
    return (
        <Container>
            {
                links.map((link, i) => 
                    <StyledLink key={link[0]} to={link[0]} selected={index === i} onClick={() => setIndex(i)}>{link[1]}</StyledLink>    
                )
            }
        </Container>
    )
}

export default SideBar;