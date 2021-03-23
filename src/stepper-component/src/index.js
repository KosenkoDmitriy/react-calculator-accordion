import React, { Component } from "react";
import { Flex, Image, Box } from "rebass";
import styled, { keyframes } from "styled-components";

// import ic_done from "./ic_done.svg"; // Add svg supports
const ic_done = `data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMS45OTkgNTExLjk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjk5OSA1MTEuOTk5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNi4yMzEsNzUuNTA4Yy03LjY4OS03LjY5LTIwLjE1OC03LjY5LTI3Ljg0OSwwbC0zMTkuMjEsMzE5LjIxMUwzMy42MTcsMjY5LjE2M2MtNy42ODktNy42OTEtMjAuMTU4LTcuNjkxLTI3Ljg0OSwwICAgIGMtNy42OSw3LjY5LTcuNjksMjAuMTU4LDAsMjcuODQ5bDEzOS40ODEsMTM5LjQ4MWM3LjY4Nyw3LjY4NywyMC4xNiw3LjY4OSwyNy44NDksMGwzMzMuMTMzLTMzMy4xMzYgICAgQzUxMy45MjEsOTUuNjY2LDUxMy45MjEsODMuMTk4LDUwNi4yMzEsNzUuNTA4eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=`;

const Colors = {
  MAIN_CONTAINER_BG: "#FAFAFA",
  GREEN: "#4DC3B6",
  GREY: "#ccc",
};

const StepperContainer = styled(Flex)`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 10px 2px #ddd;
  padding: ${({ px, py }) => `${py}px ${px}px `};
  border-radius: 30px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const RoundPrevStepsImage = styled(Image)`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 2px solid ${Colors.GREY};
  border-radius: ${({ size }) => size}px;
`;

const RoundDoneImage = styled(Image)`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${Colors.GREEN}; 
  border: 2px solid ${Colors.GREEN};
  border-radius: ${({ size }) => size}px;
`;

const borderfill = keyframes`
    0%   { opacity:0; }
    100% { opacity:1; }
`;

const RoundImage = styled(Image)`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size}px;
  border: 2px solid ${Colors.GREY};

  ${({ active }) =>
    active && `
      background-color: ${Colors.GREEN}; 
      border: 2px solid ${Colors.GREEN};`
  }
`;

const RoundNextUndoneStepsIcon = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 30px;
  
  ${({ active }) =>
    active
      ? `
        animation-delay: 1s;
        box-shadow: 0px 0px 0px 6px ${Colors.GREEN} inset;
        border: 2px solid ${Colors.GREY};
        border-radius: ${({ size }) => size}px;
        transition: box-shadow 1s;
        transition: border 1s;
        `
      : `
        border: 2px solid ${Colors.GREY};
        background-color: #fff;
      `}
`;

const lineFillAnim = keyframes`

`;
//  0%   { width:0px; }
// 100% { width:30px; }

const Line = styled.div`
  background-color: ${Colors.GREY};
  width: 30px;
  height: 2px;
`;

const GreyLine = styled(Line)`
  background-color: ${Colors.GREY};
  width: ${({ width }) => width}px;
`;

const GreenLine = styled(Line)`
  background-color: ${Colors.GREEN};
  animation: ${lineFillAnim} 1s linear;
  width: ${({ width }) => width}px;
`;

const StepRound = ({ items, active, done, size }) =>
  done ? (
    <div>
      {/* <RoundPrevStepsImage src={ic_done} size={size} /> */}
      <RoundImage src={ic_done} active={active} size={size} />
    </div>
  ) : (
    <div>
      {/* <RoundNextUndoneStepsIcon active={active} size={size} /> */}
      <RoundImage src={ic_done} active={active} size={size} />     
    </div>
  );

const StepLine = ({ active, width }) => (
  <GreyLine width={width}>
    {/* {active && <GreenLine width={width} />} */}
  </GreyLine>
);

class Stepper extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     items: this.props.items && this.props.items
  //   }
  // }
  render() {
    let {
      steps = 3,
      currentStep = 1,
      px = 16,
      py = 12,
      size = 20,
      lineWidth = 150
    } = this.props;

    currentStep = currentStep - 1;
    steps = this.props.items.length;
    const width = steps * (size + 4) + lineWidth * (steps - 1) + 2 * px;
    const height = size + 2 * py;
    const setpsArray = Array(steps).fill();

    return (
      <StepperContainer width={width} height={height} py={py} px={px}>
        {setpsArray.map((i, index) => {
          const props = {
            done: index <= currentStep - 1,
            active: index === currentStep,
            size
          };
          const lineProps = {
            active: index <= currentStep - 1,
            width: lineWidth
          };
          return (
            <Flex alignItems={"center"}>
              <div>{this.props.items.map(item=><div>{item.title}</div>)}</div>
              {/* <StepRound {...props} />
              {index !== steps - 1 && <StepLine {...lineProps} />} */}
            </Flex>
          );
        })}
      </StepperContainer>
    );
  }
}

export default Stepper;
