import React from "react";
import styled from "styled-components";

const NumberColumn = ({ valueBeingCounted = 1, count = 0 }) => {
  return (
    <Column>
      <ColumnHeader>{valueBeingCounted}'s</ColumnHeader>
      <ColumnValue>{count}</ColumnValue>
    </Column>
  );
};

export default NumberColumn;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnHeader = styled.div`
  font-size: 24px;
`;

const ColumnValue = styled.div`
  font-size: 24px;
`;
