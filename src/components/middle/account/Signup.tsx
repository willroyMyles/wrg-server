import React, {useState} from "react"
import {Layout, Menu, Row, Col, Radio} from "antd"
import Title from "antd/lib/typography/Title"
import {useForm} from "react-hook-form"
import Login from "./Login"
import Register from "./Register"
import {motion, AnimatePresence} from "framer-motion"
import {motionValues} from "../../helpers/Helpers_Index"
import Motioner from "../../helpers/Motioner"

const Signup = () => {
	const [login, setLogin] = useState(true)

	return (
		<Motioner style={{width: "100%", border: "0px solid black"}}>
			<Row justify="center" style={{margin: 25, marginBottom: 140}}>
				<Radio.Group defaultValue={true} onChange={(c) => setLogin(c.target.value)}>
					<Radio.Button value={true}>Login</Radio.Button>
					<Radio.Button value={false}>Register</Radio.Button>
				</Radio.Group>
			</Row>
			<AnimatePresence>
				{login && <Login />}
				{!login && <Register />}
			</AnimatePresence>
		</Motioner>
	)
}

export default Signup
