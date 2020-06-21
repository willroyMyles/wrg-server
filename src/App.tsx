import React, {StyleHTMLAttributes, CSSProperties, useState} from "react"
import logo from "./logo.svg"
import "./App.css"
import "antd/dist/antd.css"
import Holder from "./Holder"
import {ThemeProvider, StyledComponentProps} from "styled-components"
import {theme} from "./Theme"
import {Col, Row, Divider, Drawer} from "antd"
import eventEmitter, {eventStrings} from "./components/helpers/EventEmitters"

function App() {
	const style = {background: "#0092ff", padding: "8px 0"}

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Holder />
			</div>
		</ThemeProvider>
	)
}

export default App
