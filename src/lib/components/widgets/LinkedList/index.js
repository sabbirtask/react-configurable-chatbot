import React from "react";
import PropTypes from "prop-types";
import { StyledWrapper, StyledLink } from "./styles";

const renderLink = ({ name, href }) => (
  <StyledLink key={name} to={href} name={name} />
);

const LinkedList = ({ links, ...props }) => (
  <StyledWrapper {...props}>{links.map(renderLink)}</StyledWrapper>
);

LinkedList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
    })
  ).isRequired,
};

export default LinkedList;
