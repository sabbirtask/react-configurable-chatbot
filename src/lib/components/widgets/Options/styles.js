import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 15px;
`;

export const StyledOption = styled.button`
  font-family: Arial;
  text-decoration: none;
  color: #026cdf;
  padding: 8px;
  border: 1px solid #026cdf;
  border-radius: 16px;
  background-color: #fff;
  margin-right: 15px;

  &:hover,
  &:focus {
    background-color: rgb(214, 231, 250);
    outline: none;
  }
`;
