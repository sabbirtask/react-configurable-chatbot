// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  widgetHandler = (msg, widgetName) => {
    const message = this.createChatBotMessage(msg, {
      widget: widgetName,
    });
    this.setChatbotMessage(message);
  };

  handleOptions = (msg, widgetName) => {
    const message = this.createChatBotMessage(msg, {
      widget: widgetName,
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    });
    this.setChatbotMessage(message);
  };

  handleDefault = (msg) => {
    const message = this.createChatBotMessage(msg);
    this.setChatbotMessage(message);
  };

  setChatbotMessage = (message) => {
    return this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
