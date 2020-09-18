import PropTypes from "prop-types";

export const linksShape = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const responseShape = {
  message: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(linksShape),
};

export const logicShape = {
  keywords: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  widget: PropTypes.string.isRequired,
  widgetName: PropTypes.string.isRequired,
  response: PropTypes.shape(responseShape),
};

export const optionShape = {
  name: PropTypes.string.isRequired,
  widgetName: PropTypes.string.isRequired,
};
