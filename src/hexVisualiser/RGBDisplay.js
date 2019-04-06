import React from 'react';
import styled from 'styled-components';

const RGBDisplay = ({ r, g, b }) => {
    const brightness = (r+g+b) / 3;
    const bgTextColour = brightness > 127 ? 'black' : 'white';
    const largeBlockStyle = {
        background:`rgb(${r},${g},${b})`,
        color:bgTextColour
    }

    return (
        <Container>
            <SmallBlockHolder >
                <SmallColourBlock style={{background:`rgb(${r},0,0)`}}/>
                <SmallColourBlock style={{background:`rgb(0,${g},0)`}}/>
                <SmallColourBlock style={{background:`rgb(0,0,${b})`}}/>
            </SmallBlockHolder>
            <LargeColourBlock style={largeBlockStyle}>
                {`rgb(${r},${g},${b})`}
            </LargeColourBlock>
        </Container>
    )
};

export default RGBDisplay;

const Container = styled.div``;

const LargeColourBlock = styled.div`
    width: 100%;
    height: 80px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
`;

const SmallBlockHolder = styled.div`
    display: flex;
`;

const SmallColourBlock = styled.div`
    height: 20px;
    flex: 1;
    margin: 0 5px;
    background: black;
`;