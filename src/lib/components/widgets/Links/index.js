import React from "react";
import PropTypes from "prop-types";
import { StyledWrapper, StyledLink } from "./styles";
import { linksShape } from "../shapes";

const Link = ({ name, href }) => (
  <StyledLink key={name} to={href} name={name} />
);

const Links = ({ links, ...props }) => (
  <StyledWrapper {...props}>{links.map(Link)}</StyledWrapper>
);

Link.propTypes = linksShape;

Links.propTypes = {
  links: PropTypes.arrayOf(linksShape).isRequired,
};

export default Links;
