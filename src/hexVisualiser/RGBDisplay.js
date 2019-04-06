import React from 'react';

const RGBDisplay = ({r, g, b}) => {

    const paddingX = 0;
    const smallBlockWidth = (100-(paddingX*4)) / 3;
    const smallBlock1X = paddingX;
    const smallBlock2X = smallBlock1X + smallBlockWidth + paddingX;
    const smallBlock3X = smallBlock2X + smallBlockWidth + paddingX;

    const paddingY = 4;
    const largeBlockWidth = 100;
    const largeBlockHeight = 70;
    const smallBlockY = largeBlockHeight + paddingY;
    const smallBlockHeight = 100 - smallBlockY;

    return (
        <svg width={'100%'} height={'100%'}>
            <rect x={0}
                y={0}
                width={largeBlockWidth+'%'}
                height={largeBlockHeight+'%'}
                fill={`rgb(${r}, ${g}, ${b})`} />

            <rect x={smallBlock1X + '%'}
                y={smallBlockY+'%'}
                width={smallBlockWidth + '%'}
                height={smallBlockHeight + '%'}
                fill={`rgb(${r}, ${0}, ${0})`} />

            <rect x={smallBlock2X+'%'}
                y={smallBlockY+'%'}
                width={smallBlockWidth + '%'}
                height={smallBlockHeight +'%'}
                fill={`rgb(${0}, ${g}, ${0})`} />

            <rect x={smallBlock3X+'%'}
                y={smallBlockY+'%'}
                width={smallBlockWidth + '%'}
                height={smallBlockHeight +'%'}
                fill={`rgb(${0}, ${0}, ${b})`} />
        </svg>
    )
};

export default RGBDisplay;