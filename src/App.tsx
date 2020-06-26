import React, {StyleHTMLAttributes, CSSProperties, useState} from "react"
import logo from "./logo.svg"
import "./App.less"
import "./style.less"
// import "antd/dist/antd.less"
// import "antd/dist/antd.css"
import Holder from "./Holder"
import {ThemeProvider, StyledComponentProps} from "styled-components"
import {theme} from "./Theme"
import {Col, Row, Divider, Drawer} from "antd"
import eventEmitter, {eventStrings} from "./components/helpers/EventEmitters"

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Holder />
			</div>
		</ThemeProvider>
	)
}

export default App
