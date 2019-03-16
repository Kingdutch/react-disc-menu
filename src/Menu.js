import styled from "styled-components";

/**
 * Calculate the rotation for slice `index` of `itemCount`.
 *
 * Ensures that `itemCount` rotations make up a full circle. The rotation is
 * adjusted so slice 0 is centered at the top of the circle.
 */
const sliceRotation = ({itemCount, index = 0}) => (index + 0.5) * 360 / itemCount - 90;

/**
 * Generates the CSS for rotating `itemCount` number of slices.
 *
 * @param itemCount
 *   The number of items in the menu.
 * @return {string[]}
 *   the created CSS.
 */
const rotateSlices = ({itemCount}) => {
  return Array(itemCount).fill("").map((v, index) => {
    return `
      & li:nth-child(${index + 1}) {
        transform: rotate(${sliceRotation({itemCount, index})}deg);
      }
    `
  });
};

/**
 * Calculates the horizontal position of text in the slice of a circle.
 *
 * Uses the itemCount to determine the size of an individual slice of the
 * circle. The position of the text will be adjusted to account for a cutout.
 *
 * @param itemCount
 *   The number of items in the menu.
 * @param cutout
 *   An optional value between 0 and 1 that opens up the center of the menu.
 */
const sliceTextPositionX = ({itemCount, cutout = 0}) => {
  // Find the position halfway the slice on the unit circle.
  // Then move it halfway the cutout and the outer circle edge.
  // Finally translate from [-1;1] to [0;100].
  return 50 + Math.cos(Math.PI / itemCount) * (1 + cutout) * 0.5 * 50;
};

/**
 * Calculates the vertical position of text in the slice of a circle.
 *
 * Uses the itemCount to determine the size of an individual slice of the
 * circle. The position of the text will be adjusted to account for a cutout.
 *
 * @param itemCount
 *   The number of items in the menu.
 * @param cutout
 *   An optional value between 0 and 1 that opens up the center of the menu.
 */
const sliceTextPositionY = ({itemCount, cutout = 0}) => {
  // Find the position halfway the slice on the unit circle.
  // Then move it halfway the cutout and the outer circle edge.
  // Finally transform from [1;-1] to [0;100].
  return 50 + Math.sin(Math.PI / itemCount) * (1 + cutout) * 0.5 * -1 * 50;
};

const Menu = styled.ul`
  position: relative;
  list-style: none;
  margin: 0;

  /* padding trick for maintaining aspect ratio */
  height: 0;
  padding: 100% 0 0 0;
  width: 100%;
  
  // Circle outline.
  border-radius: 100%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  
  &:before {
    content: " ";
    position: absolute;
    top:50%;
    left: 50%;
    margin-left: -${({cutout}) => cutout * 100 / 2}%;
    margin-top: -${({cutout}) => cutout * 100 / 2}%;
    width: ${({cutout}) => cutout * 100}%;
    height: ${({cutout}) => cutout * 100}%;
    border-radius: 100%;
    box-shadow: inset 0 10px 20px rgba(0,0,0,0.19), inset 0 6px 6px rgba(0,0,0,0.23);
  }
  
  & li { 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  
    clip-path: url(#sector);
  }
  
  & li button {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    font-size: inherit;
  }

  & li a, 
  & li button {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  
  ${rotateSlices}
  
  & li > a > span, 
  & li > button > span {
    position: absolute;
    /* exact values here depend on what you are placing inside the items (icon, image, text, etc.) */
    left: ${sliceTextPositionX}%;
    top: ${sliceTextPositionY}%;
    // First move by half text width/height so that left/top position is 
    // according to element center. Then rotate to counteract slice rotation.
    transform: translate(-50%, -50%) rotate(${props => -sliceRotation(props)}deg);
  }
`;

export default Menu;