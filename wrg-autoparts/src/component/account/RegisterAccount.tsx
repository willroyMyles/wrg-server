import React, {memo} from "react"
import {Row, Input, Button, Col} from "antd"
import Title from "antd/lib/typography/Title"
import Form from "antd/lib/form/Form"
import FormItem from "antd/lib/form/FormItem"
import {WRGInput, WRGsmall, WRGTitle, WRGLargeButton, WRGFormItem} from "../../helpers/StyledComps"
import ContentFooter from "../content/ContentFooter"
import {Link} from "react-router-dom"
import {Store} from "antd/lib/form/interface"

export const RegisterAccount = memo(() => {
	const onFinish = (values: Store) => {
		console.log("fin", values)
	}

	const onFailed = (values: any) => {
		console.log("error", values)
	}

	return (
		<div
			style={{
				padding: 20,
				marginTop: 10,
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}>
			<Row>
				<WRGTitle> Register</WRGTitle>
			</Row>
			<Row justify="center" align="middle">
				<Form name="register" size="large" layout="vertical" onFinish={onFinish} onFinishFailed={(e) => onFailed(e)}>
					<FormItem
						// label="Full Name"
						name="name"
						rules={[{required: true, message: "name required", type: "string"}]}>
						<WRGInput placeholder="Full Name" />
					</FormItem>
					<FormItem
						// label="Email"
						name="email"
						rules={[{required: true, message: "email required", type: "email"}]}>
						<WRGInput placeholder="Email" type="email" />
					</FormItem>
					<FormItem
						// label="Password"
						name="password"
						rules={[{required: true, message: "password required", type: "string"}]}>
						<WRGInput placeholder="Password" type="password" />
					</FormItem>
					<FormItem
						// label="Confirm Password"
						name="password2"
						rules={[{required: true, message: "password required", type: "string"}]}>
						<WRGInput placeholder="Confirm Password" type="password" />
					</FormItem>
					<FormItem>
						<Button block type="primary" htmlType="submit">
							Register
						</Button>
					</FormItem>
					<FormItem>
						<Row justify="center">
							Already have an account?
							<Link style={{borderWidth: 1, marginLeft: ".2rem"}} to="/login">
								Log In
							</Link>
						</Row>
					</FormItem>
				</Form>
			</Row>

			<ContentFooter />
		</div>
	)
})

export default RegisterAccount
