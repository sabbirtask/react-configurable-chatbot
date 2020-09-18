import React from "react";
import PropTypes from "prop-types";
import { StyledWrapper, StyledLink } from "./styles";

const Link = ({ name, rel, target, to, ...props }) => (
  <StyledWrapper {...props}>
    <StyledLink href={to} rel={rel} target={target}>
      {name}
    </StyledLink>
  </StyledWrapper>
);

Link.propTypes = {
  name: PropTypes.string.isRequired,
  rel: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string.isRequired,
};

Link.defaultProps = {
  rel: "noopener",
  target: "_blank",
};

export default Link;
