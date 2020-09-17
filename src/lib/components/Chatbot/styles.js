import styled from "styled-components";

export const StyledAvatar = styled.div`
  min-width: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #026cdf;
  background-image: url("${({ avatarURL }) => avatarURL}");
  background-size: contain;
  color: #fff;
  font-size: 1.2rem;
  margin-right: 12.5px;
`;

const button = {
  size: "60px",
  boxShadow:
    "rgba(0, 0, 0, 0.2) 0px 1px 6px 0px, rgba(0, 0, 0, 0.2) 0px 2px 32px 0px;",
};

export const StyledButton = styled.button`
  position: fixed;
  width: ${button.size};
  height: ${button.size};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #026cdf;
  color: #fff;
  font-size: 1.2rem;
  margin-right: 12.5px;
  border: none;
  cursor: pointer;
  box-shadow: ${button.boxShadow};

  &:focus {
    outline-style: dotted;
  }
`;

export const StyledWrapper = styled.div`
  position: fixed;
  bottom: ${({ isOpen, bottom }) =>
    isOpen
      ? `calc(${bottom} + ${button.size})`
      : `calc(${bottom} + ${button.size} - 10px)`};
  right: calc(${({ right }) => right} + 10px);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1" : "-1")};
  transition: opacity 0.3s, bottom 0.3s, z-index 0.3s;

  & > .react-chatbot-kit-chat-container {
    font-family: Averta, Helvetica Neue, Helvetica, Arial, sans-serif;
    border-radius: 5px;
    box-shadow: ${button.boxShadow};
  }
  & .react-chatbot-kit-chat-inner-container {
    height: auto;
    min-height: 200px;
  }
  & .react-chatbot-kit-chat-message-container {
    height: auto;
    max-height: calc(80vh - 60px);
    padding-bottom: 30px;
  }
  & .react-chatbot-kit-user-chat-message {
    max-width: 60%;
    overflow-wrap: break-word;
  }
`;
