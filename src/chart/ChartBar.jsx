import React from "react";
import { styled } from "styled-components";

const ChartBar = ({ label, value, totalMax }) => {
  let barFillHeight = "0%";
  if (totalMax > 0) {
    barFillHeight = Math.round((value / totalMax) * 100) + "%";
  }

  return (
    <ChartbarContainer>
      <ChartbarInner>
        <ChartbarFill style={{ height: barFillHeight }}></ChartbarFill>
      </ChartbarInner>
      <ChartbarLabel>{label}</ChartbarLabel>
    </ChartbarContainer>
  );
};
const ChartbarContainer = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ChartbarInner = styled("div")`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ChartbarFill = styled("div")`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
`;

const ChartbarLabel = styled("div")`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;
export default ChartBar;
