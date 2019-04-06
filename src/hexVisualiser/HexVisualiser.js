import React, { useState } from "react";
import styled from 'styled-components';
// comps
import ColourVisualiser from './ColourVisualiser';
import RGBDisplay from './RGBDisplay';

const HexVisualiser = () => {
  const [r, setR] = useState(250);
  const [g, setG] = useState(144);
  const [b, setB] = useState(42);

  return (
    <HexVisualiserContainer>
      <ColourVisHolder>
          <ColourVisualiser value={r} onChange={setR} />
          <ColourVisualiser value={g} onChange={setG} />
          <ColourVisualiser value={b} onChange={setB} />
      </ColourVisHolder>

      <RGBDisplay r={r} g={g} b={b} />
    </HexVisualiserContainer>
  );
};

export default HexVisualiser;


const ColourVisHolder = styled.div`
  display: flex;
  width: 100%;
`;

const HexVisualiserContainer = styled.div`
  max-width: 800px;
`;
