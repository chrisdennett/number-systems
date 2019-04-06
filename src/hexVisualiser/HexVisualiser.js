import React, { useState } from "react";
import styled from 'styled-components';
// ui
import '@material/slider/dist/mdc.slider.css';
import { Slider } from '@rmwc/slider';
// comps
import NumberSystemTable from "../NumberSystemTable";
import ColourVisualiser from './ColourVisualiser';


const HexVisualiser = () => {
  const [r, setR] = useState(250);
  const [g, setG] = useState(144);
  const [b, setB] = useState(42);

  return (
    <div>
      <h1>HexVisualiser</h1>
      <svg width={'100%'} height={99}>
        <rect x={0}
          y={0}
          width={'100%'}
          height={'75%'}
          fill={`rgb(${r}, ${g}, ${b})`} />

        <rect x={0}
          y={'74%'}
          width={'33.3%'}
          height={'25%'}
          fill={`rgb(${r}, ${0}, ${0})`} />
        <rect x={'33%'}
          y={'74%'}
          width={'34%'}
          height={'25%'}
          fill={`rgb(${0}, ${g}, ${0})`} />
        <rect x={'66.6%'}
          y={'74%'}
          width={'33.3%'}
          height={'25%'}
          fill={`rgb(${0}, ${0}, ${b})`} />
      </svg>

      <ColourVisHolder>
          <ColourVisualiser value={r} onChange={setR} />
          <ColourVisualiser value={g} onChange={setG} />
          <ColourVisualiser value={b} onChange={setB} />
      </ColourVisHolder>
    </div>
  );
};

export default HexVisualiser;


const ColourVisHolder = styled.div`
  display: flex;
  width: 100%;
`;
