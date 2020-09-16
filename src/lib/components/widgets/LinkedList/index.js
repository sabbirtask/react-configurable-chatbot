import React from "react";
import PropTypes from "prop-types";
import { StyledWrapper, StyledLink } from "./styles";

const renderLink = (link) => (
  <StyledLink key={link.name} to={link.href} name={link.name} />
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
