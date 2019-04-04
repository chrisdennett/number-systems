import React from "react";
import NumberColumn from "./NumberColumn";
import { getNumberSystemArr } from "./UTILS";
import styled from "styled-components";

const NumberSystemTable = ({ currentValue, base }) => {
  const tableArr = getNumberSystemArr(currentValue, base);

  return (
    <Table>
      {tableArr.map(colData => {
        return (
          <NumberColumn
            key={colData.col}
            valueBeingCounted={colData.col}
            count={colData.count}
          />
        );
      })}
    </Table>
  );
};

export default NumberSystemTable;

const Table = styled.div`
  display: flex;
`;
