import React from 'react';

const RGBDisplay = ({r, g, b}) => {

    const totalHeight = 40;
    const totalWidth = 100;

    const padding = 2;
    const smallBlockWidth = (totalWidth-(padding*4)) / 3;
    const smallBlock1X = padding;
    const smallBlock2X = smallBlock1X + smallBlockWidth + padding;
    const smallBlock3X = smallBlock2X + smallBlockWidth + padding;

    const largeBlockWidth = totalWidth;
    const largeBlockHeight = totalHeight * 0.60;
    const smallBlockY = largeBlockHeight + padding;
    const smallBlockHeight = totalHeight - smallBlockY;

    return (
        <svg width={'100%'} height={'100%'} viewBox={`0 0 ${totalWidth} ${totalHeight}`}>
            <rect x={0}
                y={0}
                width={largeBlockWidth}
                height={largeBlockHeight}
                fill={`rgb(${r}, ${g}, ${b})`} />

            <rect x={smallBlock1X}
                y={smallBlockY}
                width={smallBlockWidth}
                height={smallBlockHeight}
                fill={`rgb(${r}, ${0}, ${0})`} />

            <rect x={smallBlock2X}
                y={smallBlockY}
                width={smallBlockWidth}
                height={smallBlockHeight}
                fill={`rgb(${0}, ${g}, ${0})`} />

            <rect x={smallBlock3X}
                y={smallBlockY}
                width={smallBlockWidth}
                height={smallBlockHeight}
                fill={`rgb(${0}, ${0}, ${b})`} />
        </svg>
    )
};

export default RGBDisplay;