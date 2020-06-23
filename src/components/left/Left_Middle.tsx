import React, {useState} from "react"
import {Router, Switch, Route} from "react-router-dom"
import {sideHistory} from "../helpers/Helpers_Index"
import {Row} from "antd"
import LeftMiddle_Default from "./view/LeftMiddle_Default"

const Left_Middle = () => {
	const [defaultVisible, setDefaultVisible] = useState(true)

	return (
		<Row align="top" justify="start" style={{width: "100%", padding: 20}}>
			{defaultVisible && <LeftMiddle_Default />}
		</Row>
	)
}

export default Left_Middle
