import React, {useState} from "react"
import logo from "./logo.svg"
import "antd/dist/antd.css"
import "./App.css"
import Holder from "./component/Holder"
import {Drawer} from "antd"
import {eventEmitter} from "./helpers"

function App() {
	return (
		<div className="App">
			<Holder />
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
		</div>
	)
}

export default App
