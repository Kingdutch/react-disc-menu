import React from "react";
import PropTypes from "prop-types";

const SVGMenuSlice = ({ itemCount, cutout = 0 }) => {
  // Calculate the point of our slice on the unit circle.
  const circleX = Math.cos((Math.PI * 2) / itemCount);
  const circleY = Math.sin((Math.PI * 2) / itemCount);

  // Translate the unit circle to a [0,0];[1,1] square (top-left, bottom-right).
  const arcX = (circleX + 1) / 2;
  const arcY = (circleY - 1) / -2;

  const startX = 0.5 + 0.5 * cutout;

  const circleEndX = circleX * cutout;
  const circleEndY = circleY * cutout;
  const endX = (circleEndX + 1) / 2;
  const endY = (circleEndY - 1) / -2;

  return (
    <svg height="0" width="0">
      <defs>
        <clipPath clipPathUnits="objectBoundingBox" id="sector">
          <path
            fill="none"
            stroke="#111"
            strokeWidth="1"
            className="sector"
            d={`M${startX},0.5 L1,0.5 A0.5,0.5 0 0,0 ${arcX},${arcY} L${endX},${endY} A${cutout /
              2},${cutout / 2} 0 0,1 ${startX},0.5`}
          />
        </clipPath>
      </defs>
    </svg>
  );
};

SVGMenuSlice.propTypes = {
  itemCount: PropTypes.number.isRequired,
  cutout: PropTypes.number
};

export default SVGMenuSlice;
