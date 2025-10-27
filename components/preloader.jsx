import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div id="box">
        <div id="l1">W</div>
        <div id="l2">E</div>
        <div id="l3">L</div>
        <div id="l4">C</div>
        <div id="l5">O</div>
        <div id="l6">M</div>
        <div id="l7">E</div>
        <div id="l8">❤️</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #box div {
    display: inline-block;
    margin: 5px;
    font-size: 35px;
    font-family: Arial, sans-serif; /* same as your original */
    font-weight: normal; /* thinner font, same as before */
    animation: obrot 2s linear infinite;
  }

  #box {
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes obrot {
    0% {
      transform: rotateX(0);
    }
    12.5% {
      transform: rotateX(90deg);
    }
    25% {
      transform: rotateX(180deg);
    }
    37.5% {
      transform: rotateX(270deg);
    }
    50% {
      transform: rotateX(360deg);
    }
    100% {
      transform: rotateX(360deg);
    }
  }

  /* === Staggered delays + initial pause before starting === */
  #box div:nth-child(1) {
    animation-delay: 0.5s;
  }
  #box div:nth-child(2) {
    animation-delay: 0.9s;
  }
  #box div:nth-child(3) {
    animation-delay: 1s;
  }
  #box div:nth-child(4) {
    animation-delay: 1.1s;
  }
  #box div:nth-child(5) {
    animation-delay: 1.2s;
  }
  #box div:nth-child(6) {
    animation-delay: 1.3s;
  }
  #box div:nth-child(7) {
    animation-delay: 1.4s;
  }
  #box div:nth-child(8) {
    animation-delay: 1.5s;
  }

  /* ❤️ Heart style */
  #l8 {
    font-size: 38px;
    color: #ff4b4b;
    animation: pulse 1.8s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
  }
`;

export default Loader;