// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import { StyledAvatar } from "./styles";
import Links from "../widgets/Links";
import Options from "../widgets/Options";

const config = ({
  defaultResponse,
  initialMessage = {},
  logic = {},
  botName = "Bot",
  avatarURL = "/logo192.png",
}) => {
  const linksWidgets = logic
    .filter(({ widget }) => widget === "links")
    .map(({ widgetName, response: { links } }) => ({
      widgetName,
      widgetFunc: (props) => <Links {...props} links={links} />,
    }));

  const initWidget = {
    widgetName: initialMessage.widgetName,
    widgetFunc: (props) => (
      <Options {...props} options={initialMessage.options} />
    ),
    mapStateToProps: ["logic"],
  };

  return {
    initialMessages: [
      createChatBotMessage(initialMessage.message, {
        ...(initialMessage.widgetName && {
          widget: initialMessage.widgetName,
        }),
      }),
    ],
    botName,
    customComponents: {
      botAvatar: (props) => <StyledAvatar avatarURL={avatarURL} {...props} />,
    },
    customStyles: {
      botMessageBox: {
        backgroundColor: "#026CDF",
      },
      chatButton: {
        backgroundColor: "#026CDF",
      },
    },
    state: {
      defaultResponse,
      logic,
    },
    widgets: [initWidget, ...linksWidgets],
  };
};

export default config;
