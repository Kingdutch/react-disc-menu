# React Disc Menu

React Disc Menu is a circular menu component inspired by Second Life built with 
[React](https://reactjs.org/) and [Styled Components](https://www.styled-components.com/).

## Installation

Install using npm or yarn.

```bash
npm install --save react-disc-menu
```

```bash
yarn add react-disc-menu
```

## Usage

A single CircularMenu element is exported by the module. This will render each 
child on its own wedge. The wedges are organised in a circle with space evenly
divided among all children.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import CircularMenu from "react-disc-menu";

function App() {
  return (
    <CircularMenu cutout={0.25}>
       <button onClick={() => alert("I'm a button")}>
         <span>Option 1</span>
       </button>
       <a href="#" onClick={() => alert("Links work too")}>
         <span>Option 2</span>
       </a>
     </CircularMenu>
 );
}

// Render our app in a <div id="root"></div> element.
ReactDOM.render(element, document.getElementById('root'));
```

### Properties

`cutout?: float` <b>Default: `null`</b>

A number between 0 and 1 that determines the size of the cutout in the middle of the menu.

`itemOrientation?: ["toBottom", "toCenter"]`
<b>Default: `toBottom`</b>

Determines the orientation of the text or icon that is in a wedge. `toBottom` 
will ensure that the bottom of each item points to the bottom of the page. 
`toCenter` will align the bottom of each item pointing to the center of the 
menu.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/Kingdutch/react-disc-menu/blob/master/LICENSE)