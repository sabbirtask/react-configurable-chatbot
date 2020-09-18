import React from "react";
import PropTypes from "prop-types";
import { StyledWrapper, StyledOption } from "./styles";
import { logicShape, optionShape } from "../shapes";

const Option = (
  { option: { widgetName, name }, logic, actionProvider },
  key
) => {
  const handler = () => {
    const [
      {
        response: { message },
      },
    ] = logic.filter((item) => item.widgetName === widgetName);

    return actionProvider.handleOptions(message, widgetName);
  };

  return (
    <StyledOption type="button" key={key} onClick={handler}>
      {name}
    </StyledOption>
  );
};

const Options = ({ options, ...props }) => (
  <StyledWrapper {...props}>
    {options.map((option, key) => Option({ option, ...props }, key))}
  </StyledWrapper>
);

Option.propTypes = {
  logic: PropTypes.arrayOf(logicShape).isRequired,
  option: PropTypes.arrayOf(optionShape).isRequired,
  actionProvider: PropTypes.func.isRequired,
};

Options.propTypes = {
  options: PropTypes.arrayOf(optionShape).isRequired,
};

export default Options;
