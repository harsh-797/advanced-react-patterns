// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

const ToggleContext = React.createContext()

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  const value = [on, toggle]
  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  )
}

function useContent() {
  const context = React.useContext(ToggleContext)
  if (!context) throw new Error('Context not founds')
  return context
}

function ShowSwitch(props) {
  const [on, toggle] = useContent()
  return <Switch on={on} onClick={toggle} />
}

function ToggleOn({children}) {
  const [on] = useContent()
  return on ? children : null
}

function ToggleOff({children}) {
  const [on] = useContent()
  return on ? null : children
}

function ToggleButton() {
  return (
    <Toggle>
      <ShowSwitch />
      <ToggleOn>Button is On</ToggleOn>
      <ToggleOff>Button is Off</ToggleOff>
    </Toggle>
  )
}

const App = () => <ToggleButton />

// function App() {
//   return (
//     <div>
//       <Toggle>
//         <ToggleOn>The button is on</ToggleOn>
//         <ToggleOff>The button is off</ToggleOff>
//         <div>
//           <ToggleButton />
//         </div>
//       </Toggle>
//     </div>
//   )
// }

export default App

/*
eslint
  no-unused-vars: "off",
*/
