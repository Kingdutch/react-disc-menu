import React from "react";
import PropTypes from "prop-types";
import SVGMenuSlice from "./SVGMenuSlice";
import Menu from "./Menu";

const CircularMenu = ({ children, cutout, itemOrientation, ...rest }) => {
  const props = {
    itemCount: children.length,
    cutout,
    itemOrientation
  };

  return (
    <div {...rest}>
      <SVGMenuSlice {...props} />
      <Menu {...props}>
        {children.map((c, i) => (
          <li className={"slice"} key={i}>
            {c}
          </li>
        ))}
      </Menu>
    </div>
  );
};

CircularMenu.propTypes = {
  cutout: Menu.propTypes.cutout,
  itemOrientation: Menu.propTypes.itemOrientation,
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default CircularMenu;
