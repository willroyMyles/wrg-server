import React, {useState} from "react"
import {Router, Switch, Route} from "react-router-dom"
import {sideHistory} from "../helpers/Helpers_Index"
import {Row} from "antd"
import LeftMiddle_Default from "./view/LeftMiddle_Default"

const Left_Middle = () => {
	const [defaultVisible, setDefaultVisible] = useState(true)

	return <Row justify="center">{defaultVisible && <LeftMiddle_Default />}</Row>
}

export default Left_Middle
