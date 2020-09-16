import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const windowSVG = ({ isOpen, ...props }) => (
  <svg
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 28 32"
    width="28"
    height="32"
    fill="#fff"
    {...props}
  >
    <path d="M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592 0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0 27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333 C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333 13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428 4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415 C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667 13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726 24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z" />
  </svg>
);

const StyledWindow = styled(windowSVG)`
  position: absolute;
  z-index: 1;
  opacity: $ ${({ isOpen }) => (!isOpen ? "1" : "0")};
  transform: ${({ isOpen }) =>
    !isOpen ? "rotate(0deg)" : "rotate(30deg) scale(0)"};
  transition: transform 0.16s linear 0s, opacity 0.08s linear 0s;
`;

const caretSVG = ({ isOpen, ...props }) => (
  <svg
    focusable="false"
    viewBox="0 0 16 14"
    width="16"
    height="25"
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.116 4.884l1.768-1.768L8 9.232l6.116-6.116 1.768 1.768L8 12.768.116 4.884z"
    />
  </svg>
);

const StyledCaret = styled(caretSVG)`
  position: absolute;
  z-index: 2;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transform: ${({ isOpen }) =>
    isOpen ? "rotate(0deg)" : "rotate(-60deg) scale(0)"};
  transition: transform 0.16s linear 0s, opacity 0.08s linear 0s;
`;

const ChatbotIcon = (props) => (
  <>
    <StyledCaret {...props} />
    <StyledWindow {...props} />
  </>
);

export default ChatbotIcon;

ChatbotIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
