import React from "react";
import NumberColumn from "./NumberColumn";
import { createBinaryColumns, toBinary } from "./UTILS";
import styled from "styled-components";

const BinaryTable = ({ currentValue, maxValue }) => {
  const binaryCols = createBinaryColumns(maxValue);
  const binaryArr = toBinary(currentValue, binaryCols);

  // <h2>binary: {toBinary(count, binaryCols)}</h2>
  // <h2>binary cols: {binaryCols.join(", ")}</h2>

  return (
    <Table>
      {binaryCols.map((col, index) => {
        return (
          <NumberColumn
            key={col}
            valueBeingCounted={col}
            count={binaryArr[index]}
          />
        );
      })}
    </Table>
  );
};

export default BinaryTable;

const Table = styled.div`
  display: flex;
`;
