import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

const StyledLink = styled.a`
  font-family: Arial;
  text-decoration: none;
  color: #026cdf;
  padding: 8px;
  border: 1px solid #026cdf;
  border-radius: 8px;

  &:hover {
    background-color: rgb(214, 231, 250);
  }
`;

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
