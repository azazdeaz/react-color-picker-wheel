#work in progress!

#react-color-picker-wheel
A simple react component to edit hsl colors with on a color circle.
(Made with canvas and svg, no need for external image assets)

###[Here is a playground demo!](azazdeaz.github.io/react-color-picker-wheel)

###Install
```npm install react-color-circle```

###Example
```javascript
var ColorPickerWheel = require('react-color-picker-wheel')

<ColorPickerWheel radius={123}/>
```

###Props
- **```radius```**:  The radius of the whole color circle. So ```{radius: 50}``` will result and element with ```100px width``` and ```height```
- **```width```**: The width of the hue circle (color range). It has to be smaller the the ```radius```
- **```h, s, l```**:  The hue, saturation, and light values. All of them has to be  between 0-1.
- **```onChange```**:  Called with ```{h: 0-1, s: 0-1, l: 0-1}```.
