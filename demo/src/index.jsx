require('./index.html') //for the webpack build

import React from 'react'
import tinycolor from 'tinycolor2'
import Playground from '@azazdeaz/component-playground'
import ColorPickerWheel from 'react-color-picker-wheel'


const code = `//The test wrapper provides the h,l,s, params and handles the onChange
//but you can remove it and fill them by hand
<TestWrapper>
  <ColorPickerWheel
  radius = {234}
  width = {36}/>
</TestWrapper>`

class TestWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {h: 0.15, l: 0.5, s: 0.5}
  }
  onChange = hls => {
    console.log(hls)
    this.setState(hls)
  }
  render() {
    const {h, l, s} = this.state
    const circle = React.cloneElement(this.props.children, {
      h,
      l,
      s,
      onChange: this.onChange
    })
    const color = `hsl(${h*360}, ${s*100}%, ${l*100}%)`
    console.log(color)
    const previvewStyle = {
      color
    }

    return <div>
      <div style={previvewStyle}>{JSON.stringify({h, s, l})}</div>
      {circle}
    </div>
  }
}

class App extends React.Component {
  render() {
    var styleCont = {
      width: 920,
      padding: '0 20px',
      margin: '12px auto',
      display: 'flex',
    }
    return (
      <div style={styleCont}>
        <Playground
          codeText = {code}
          scope = {{
            React,
            ColorPickerWheel,
            TestWrapper
          }}
          docClass = {ColorPickerWheel}
          es6Console = {false}
          noRender = {true}/>
      </div>
    )
  }
}

React.render(<App/>, document.querySelector('#react-mount'))
