import React from "react"
import "./App.less"
import "./style.less"
import "bootstrap/dist/css/bootstrap.css"

import {ThemeProvider} from "styled-components"
import {theme} from "./Theme"
import {Row} from "antd"
import WebFont from "webfontloader"
import Holder from "./Holder"
function App() {
	WebFont.load({
		google: {
			families: ["Titillium", "Montserrat", "Roboto", "Dosis", "Questrial", "sans-serif"],
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Row justify="center">
					{/* <Col style={{border: "0px solid black"}} xl={24} xxl={20}> */}
					<Holder />
					{/* </Col> */}
				</Row>
			</div>
		</ThemeProvider>
	)
}

export default App
