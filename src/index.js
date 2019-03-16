import React from "react";
import PropTypes from "prop-types";
import SVGMenuSlice from "./SVGMenuSlice";
import Menu from "./Menu";

const CircularMenu = ({ children, cutout, ...rest }) => {
  const props = {
    itemCount: children.length,
    cutout,
  };

  return (
    <div {...rest}>
      <SVGMenuSlice {...props} />
      <Menu {...props}>
        {children.map((c, i) => <li className={"slice"} key={i}>{c}</li>)}
      </Menu>
    </div>
  );
};

CircularMenu.propTypes = {
  cutout: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  rest: PropTypes.any
};

export default CircularMenu;