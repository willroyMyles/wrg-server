import React, {useState} from "react"
import {motion} from "framer-motion"
import {motionValues, ErrorLabel} from "../../helpers/Helpers_Index"
import {Row, Input, Col, Button, message} from "antd"
import {Controller, useForm} from "react-hook-form"
import dataExchanger from "../../../data_layer/DataExchange"
import {observer} from "mobx-react"
import Motioner from "../../helpers/Motioner"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"

interface FormPropsL {
	email: string
	password: string
	password2: string
	username: string
}

const Register = observer(() => {
	const [loading, setLoading] = useState(false)
	const {errors, control, handleSubmit} = useForm<FormPropsL>()

	const submit = (data: FormPropsL) => {
		dataExchanger.register(data).then((res) => {
			if (res) {
				message.success("Registered successfully")
				eventEmitter.emit(eventStrings.showDrawer, false)
			} else {
				message.error("Did not register successfully")
			}
		})
	}

	return (
		<Motioner style={{width: "100%", border: "0px solid black"}}>
			<Row justify="center">
				<form onSubmit={handleSubmit(submit)}>
					<Row style={{margin: 20}}>
						<Row className="form-label">User name</Row>
						<Controller
							as={<Input type="text" className="styled-input" placeholder="" />}
							control={control}
							rules={{required: "user name required"}}
							name="username"
							// defaultValue={"wm"}
						/>
						{errors.username && <ErrorLabel text={errors.username.message?.toString()} />}
					</Row>
					<Row style={{margin: 20}}>
						<Row className="form-label">Email</Row>
						<Controller
							as={<Input className="styled-input" placeholder="" />}
							control={control}
							rules={{required: "email required"}}
							name="email"
							// defaultValue="wm@myles.com"
						/>
						{errors.email && <ErrorLabel text={errors.email.message?.toString()} />}
					</Row>
					<Row style={{margin: 20}}>
						<Row className="form-label">Password</Row>
						<Controller
							as={<Input type="password" className="styled-input" placeholder="" />}
							control={control}
							rules={{required: "password required"}}
							name="password"
							// defaultValue="4"
						/>
						{errors.password && <ErrorLabel text={errors.password.message?.toString()} />}
					</Row>
					<Row style={{margin: 20}}>
						<Row className="form-label">Confirm password</Row>
						<Controller
							as={<Input type="password" className="styled-input" placeholder="" />}
							control={control}
							rules={{required: "required to confirm password"}}
							name="password2"
							// defaultValue="4"
						/>
						{errors.password2 && <ErrorLabel text={errors.password2.message?.toString()} />}
					</Row>
					<Row justify="center">
						<Col span={10}>
							<Button loading={loading} htmlType="submit" block>
								Submit
							</Button>
						</Col>
					</Row>
				</form>
			</Row>
		</Motioner>
	)
})

export default Register
