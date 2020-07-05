import React from "react"
import "./App.less"
import "./style.less"
import "bootstrap/dist/css/bootstrap.css"

import {ThemeProvider} from "styled-components"
import {theme} from "./Theme"
import {Row} from "antd"
import WebFont from "webfontloader"
import Holder from "./Holder"
import {Container} from "react-bootstrap"
function App() {
	WebFont.load({
		google: {
			families: ["Titillium", "Montserrat", "Roboto", "Dosis", "Questrial", "sans-serif"],
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<div className="App " style={{backgroundColor: "rgba(240,242,245, 1)"}}>
				<Row justify="center">
					<Container>
						<Holder />
					</Container>
				</Row>
			</div>
		</ThemeProvider>
	)
}

export default App
