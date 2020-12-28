import React, { useRef } from 'react';
import styled from 'styled-components';

import { StyledButton } from './Styled';

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

const ImageContainer = styled.div`
    width: 100%;
    overflow-x: scroll;

    ::-webkit-scrollbar { display:none } /* 스크롤 바 */
    ::-webkit-scrollbar-track { background-color:rgba(0,0,0,0); } /* 스크롤 바 밑의 배경 */
    ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0); border-radius: 10px; } /* 실질적 스크롤 바 */
    ::-webkit-scrollbar-button { display: none; } /* 스크롤 바 상 하단 버튼 */
`;

const Image = styled.div`
    width: calc(100% * ${props => props.number});

    /* overflow-x: scroll; */
    display: flex;
    /* flex-wrap: wrap; */

    align-items: center;

    /* justify-content: space-around; */
    /* position: relative; */
`;

const Browser = styled.div`    
    box-sizing: border-box;
    border: 4px solid #4d4d4d;

    width: 100%;
    margin: 4px;
    
    display: inline-flex;
    flex-direction: column;

    border-radius: 12px;
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

    border-radius: 8px;
`;

const SlideImage = ({ images }) => {
    const r = useRef();
    
    const onClickHandle = (direction) => {
        const unit = r.current.scrollWidth / images.length;

        if (direction === 'left') {
            r.current.scrollTo({ left: r.current.scrollLeft - unit , behavior: 'smooth' });
        }
        else {
            r.current.scrollTo({ left: r.current.scrollLeft + unit , behavior: 'smooth' });
        }
    }

    return (
        <Layered className='center'>
            <ImageContainer ref={r}>
                <Image number={images ? images.length : 0}>
                    {
                        images ? images.map((vv, ii) => (
                            <Browser key={ii}>
                                <SearchBar>
                                    <SearchIcon className='a'></SearchIcon>
                                    <SearchIcon className='b'></SearchIcon>
                                    <SearchIcon className='c'></SearchIcon>

                                    <SearchText></SearchText>
                                </SearchBar>
                                <BrowserContent src={vv}></BrowserContent>
                            </Browser>
                        )) : ''
                    }
                </Image>
            </ImageContainer>
            <div>
                <StyledButton onClick={() => onClickHandle('left')}>{'<'}</StyledButton>
                <StyledButton onClick={() => onClickHandle('right')}>{'>'}</StyledButton>
            </div>
        </Layered>
    )
};

export default SlideImage;