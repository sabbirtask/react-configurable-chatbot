class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowercase = message.toLowerCase();
    const { widgetHandler, handleDefault } = this.actionProvider;

    const { defaultResponse, logic } = this.state;

    const matchingKeywords = logic.filter(({ keywords }) =>
      keywords.some((item) => lowercase.includes(item))
    );

    if (matchingKeywords.length) {
      const [
        {
          widgetName,
          response: { message: msg },
        },
      ] = matchingKeywords;
      return widgetHandler(msg, widgetName);
    }

    return handleDefault(defaultResponse);
  }
}

export default MessageParser;
