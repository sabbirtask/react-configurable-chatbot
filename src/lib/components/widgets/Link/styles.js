import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
  margin-left: 15px;
`;

export const StyledLink = styled.a`
  font-family: Arial;
  text-decoration: none;
  color: #026cdf;
  padding: 8px;
  border: 1px solid #026cdf;
  border-radius: 16px;

  &:hover,
  &:focus {
    background-color: rgb(214, 231, 250);
    outline: none;
  }
`;
