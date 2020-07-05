import React from "react"
import {Layout, Row, Col, Button, Menu, Radio, Tooltip, BackTop} from "antd"
import Title from "antd/lib/typography/Title"
import RadioGroups from "../helpers/RadioGroups"
import Middle_Header from "./Middle_Header"
import Content_Holder from "./content/Content_Holder"
import {theme} from "../../Theme"
import {BsArrowUp} from "react-icons/bs"

const Middle_Holder = () => {
	return (
		<Layout>
			<Layout.Content style={{backgroundColor: "transparent"}}>
				<Content_Holder />
			</Layout.Content>
		</Layout>
	)
}

export default Middle_Holder
