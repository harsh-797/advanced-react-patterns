// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, (child) => {
    if (typeof child.type === 'function') {
      if (child.props.children) return React.cloneElement(child, {on})
      return React.cloneElement(child, {on, handleToggle: toggle})
    } else {
      return child
    }
  })
}

const ToggleOn = ({on, children}) => {
  if (on) return <>{children}</>
}

const ToggleOff = ({on, children}) => {
  if (!on) return <>{children}</>
}

const ToggleButton = ({on, handleToggle}) => {
  console.log('in toggle')
  return <Switch on={on} onClick={handleToggle} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleButton />
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
