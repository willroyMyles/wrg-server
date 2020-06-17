import React from "react"
import {Layout, Row, Col, Button, Menu, Radio} from "antd"
import Title from "antd/lib/typography/Title"
import RadioGroups from "../helpers/RadioGroups"
import Middle_Header from "./Middle_Header"
import Content_Holder from "./content/Content_Holder"

const Middle_Holder = () => {
	return (
		<Layout>
			<Layout.Header style={{backgroundColor: "transparent", padding: 0}}>
				<Middle_Header />
			</Layout.Header>
			<Layout.Content style={{marginLeft: 20, marginTop: 30}}>
				<Content_Holder />
			</Layout.Content>
		</Layout>
	)
}

export default Middle_Holder
