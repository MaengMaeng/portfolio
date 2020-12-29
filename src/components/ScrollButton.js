import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {UP_ARROW_ICON} from '../asset/icon';

const Container = styled.div`
    position: fixed;

    right: 40px;
    bottom: 40px;
`;

const Button = styled.button`
    width: 80px;
    height: 80px;
    
    border: none;
    border-radius: 50%;
    margin: 4px;
    background-color: white;
    
    transition-duration: 0.5s;
    transition-timing-function: ease;

    display: block;

    &:hover{
        background-color: #4758fc;
    }

    &.disable{
        visibility: hidden;
    }
`;

const Image = styled.img`
    &.up{

    }

    &.down{
        transform: rotate( 180deg );
    }
`;

const ScrollButton = ({layout, number}) => {
    const [index, setIndex] = useState(0);
    const [upVisible, setUpVisible] = useState(false);
    const [downVisible, setDownVisible] = useState(true);
    
    const onClickHandle = (direction) => {
        const unit = layout.current.scrollHeight / number;

        layout.current.scrollTo({ top: unit * (index + (direction === 'down' ? 1 : -1)), behavior: 'smooth' });
    }
    
    useEffect(() => {
        const unit = layout.current.scrollHeight / number;
        const end = layout.current.scrollHeight - unit;

        layout.current.addEventListener('scroll',(e) => {
            const top = layout.current.scrollTop;
            if(top === 0){
                setUpVisible(false);
            }
            else if(top === end){
                setDownVisible(false);
            }
            else{
                setUpVisible(true);
                setDownVisible(true);

                for(let i = 0; i < number; i++){
                    if(unit*(i) <= top && top < unit*(i+1)){
                        setIndex(i);
                        break;
                    }
                }
            }
        });
    });

    return (
        <Container>
            <Button className={!upVisible ? 'disable' : ''} onClick={() => onClickHandle('up')}>
                <Image src={UP_ARROW_ICON}/>
            </Button>
            <Button className={!downVisible ? 'disable' : ''} onClick={() => onClickHandle('down')}>
                <Image className='down' src={UP_ARROW_ICON}/>
            </Button>
        </Container>
    )
}

export default ScrollButton;