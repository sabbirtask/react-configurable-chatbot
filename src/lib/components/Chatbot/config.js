// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import { StyledAvatar } from "./styles";
import Link from "../widgets/Link";
import LinkedList from "../widgets/LinkedList";

const config = ({
  defaultResponse,
  initialMessage = {},
  logic = {},
  botName = "Bot",
  avatarURL = "/logo192.png",
}) => {
  const linkWidgets = logic
    .filter(({ widget }) => widget === "link")
    .map(({ widgetName, response: { links } }) => ({
      widgetName,
      widgetFunc: (props) => (
        <Link name={links[0].name} to={links[0].href} {...props} />
      ),
    }));

  const linkedListWidgets = logic
    .filter(({ widget }) => widget === "linkedList")
    .map(({ widgetName, response: { links } }) => ({
      widgetName,
      widgetFunc: (props) => <LinkedList {...props} links={links} />,
    }));

  const initWidget = {
    widgetName: initialMessage.widgetName,
    widgetFunc: (props) => (
      <LinkedList {...props} links={initialMessage.links} />
    ),
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
    widgets: [initWidget, ...linkWidgets, ...linkedListWidgets],
  };
};

export default config;
