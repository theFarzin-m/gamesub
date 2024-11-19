import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: var(--color-slate-100);
  & div:nth-child(1) {
    animation-delay: 0.01s;
  }

  & div:nth-child(2) {
    animation-delay: 0.09s;
  }

  & div:nth-child(3) {
    animation-delay: 0.19s;
  }

  & div:nth-child(4) {
    animation-delay: 0.29s;
  }
`;

const Bar = styled.div`
  width: 7px;
  height: 18px;
  margin: 0 9px;
  border-radius: 10px;
  animation: loading 1s ease-in-out infinite;
  background-color: var(--color-brand-500);

  @keyframes loading {
    0% {
      transform: scale(1);
    }

    20% {
      transform: scale(1, 2.5);
    }

    40% {
      transform: scale(1);
    }
    60% {
      transform: scale(1);
    }
  }
`;

export default function Spinner() {
  return (
    <SpinnerStyle>
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </SpinnerStyle>
  );
}
