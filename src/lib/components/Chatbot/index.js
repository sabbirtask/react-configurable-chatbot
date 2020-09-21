import React, { Component } from "react";
import PropTypes from "prop-types";
import { Chatbot as ChatbotKit } from "react-chatbot-kit";
import { StyledButton, StyledWrapper } from "./styles";
import ChatbotIcon from "./Icon";
import config from "./config";
import ActionProvider from "./actionProvider";
import MessageParser from "./messageParser";

class Chatbot extends Component {
  static propTypes = {
    bottom: PropTypes.string,
    right: PropTypes.string,
    isOpenDefault: PropTypes.bool,
    jsonData: PropTypes.string.isRequired,
  };

  static defaultProps = {
    bottom: "30px",
    right: "30px",
    isOpenDefault: false,
  };

  state = {
    hasDecided: false,
    logic: {},
    toggle: false,
  };

  componentDidMount() {
    const { isOpenDefault, jsonData } = this.props;
    this.setState({ toggle: isOpenDefault });
    this.fetchData(jsonData);
  }

  fetchData = async (jsonData) => {
    const data = await fetch(jsonData);
    const decisions = await data.json();

    this.setState({
      logic: decisions,
      hasDecided: true,
    });
  };

  handleIconClick = () => {
    this.setState(({ toggle }) => ({ toggle: !toggle }));
  };

  render() {
    const { bottom, right } = this.props;
    const { hasDecided, logic, toggle } = this.state;
    const isLogicEmpty = Object.keys(logic).length === 0;

    if (!hasDecided || isLogicEmpty) {
      return null;
    }

    const ariaLabel = `${toggle ? "Close" : "Open"} Chat Messenger`;

    return (
      <>
        <StyledWrapper
          bottom={bottom}
          right={right}
          isOpen={toggle}
          {...this.props}
        >
          <ChatbotKit
            config={config(logic)}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </StyledWrapper>
        <StyledButton
          bottom={bottom}
          right={right}
          onClick={this.handleIconClick}
          type="button"
          aria-label={ariaLabel}
        >
          <ChatbotIcon isOpen={toggle} />
        </StyledButton>
      </>
    );
  }
}

export default Chatbot;
