import React from "react";
import PropTypes from "prop-types";

import { IconSelection } from "constants/AppConstants/IconSelection";

const IconComponent = ({ name }) => {
  let icon = IconSelection.filter(icon => icon.name === name);
  return (
    <svg width="15" height="15" viewBox="0 0 32 32">
      <path d={icon[0].path} />
    </svg>
  );
};

IconComponent.propTypes = {
  name: PropTypes.string.isRequired
};

export default IconComponent;
