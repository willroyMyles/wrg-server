import React, {useState} from "react"
import {useForm, Controller} from "react-hook-form"
import {Row, Input, Col, Button, message} from "antd"
import {ErrorLabel, motionValues} from "../../helpers/Helpers_Index"
import {motion} from "framer-motion"
import dataExchanger from "../../../data_layer/DataExchange"
import Motioner from "../../helpers/Motioner"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"
interface FormPropsL {
	email: string
	password: string
}

const Login = () => {
	const [loading, setLoading] = useState(false)
	const {errors, control, handleSubmit} = useForm<FormPropsL>()

	const submit = (data: FormPropsL) => {
		setLoading(true)
		dataExchanger.login(data).then((res) => {
			setLoading(false)
			if (res) {
				message.success("logged in!")
				eventEmitter.emit(eventStrings.showDrawer, false)
			} else {
				message.error("something went wr0ng")
			}
		})
	}

	return (
		<Motioner style={{width: "100%", border: "0px solid black"}}>
			<Row justify="center">
				<form onSubmit={handleSubmit(submit)}>
					<Row style={{marginTop: 35}}>
						<Row className="form-label">email</Row>
						<Controller
							as={<Input className="styled-input" />}
							control={control}
							rules={{required: "email required"}}
							name="email"
						/>
						{errors.email && <ErrorLabel text={errors.email.message?.toString()} />}
					</Row>
					<Row style={{marginTop: 35}}>
						<Row className="form-label">password</Row>
						<Controller
							as={<Input type="password" className="styled-input" />}
							control={control}
							rules={{required: "password required"}}
							name="password"
						/>
						{errors.password && <ErrorLabel text={errors.password.message?.toString()} />}
					</Row>
					<Row style={{marginTop: 25}} justify="center">
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
}

export default Login
