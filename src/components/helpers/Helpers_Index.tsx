import {createBrowserHistory} from "history"
import Text from "antd/lib/typography/Text"
import React from "react"
import {motion} from "framer-motion"
import {Row} from "antd"
import Title from "antd/lib/typography/Title"
import Motioner from "./Motioner"
export const sideHistory = createBrowserHistory()

export const ErrorLabel = (text: string | any) => {
	const val = motionValues.Scale_Big
	return (
		<motion.span
			style={{width: "100%", border: "0px solid red"}}
			initial={val}
			animate={motionValues.in}
			exit={val}
			className="error-text">
			<Row justify="center">{text.text}</Row>
		</motion.span>
	)
}

export const Heading = (props: any) => {
	return (
		<Motioner style={{marginBottom: 35}}>
			<Row>
				<Title level={2}>{props.children}</Title>
			</Row>
		</Motioner>
	)
}

export const SubHeading = (props: any) => {
	return (
		<Motioner style={{marginBottom: 5}}>
			<Row>
				<span style={{textShadow: "0px 0px .5px rgba(90,90,90,.1)", fontSize: ".9rem", fontWeight: "bold"}}>
					{props.children}
				</span>
			</Row>
		</Motioner>
	)
}

export const SectionText = (props: any) => {
	return (
		<Motioner style={{marginBottom: 5}}>
			<Row>
				<span style={{textShadow: "0px 0px .5px rgba(90,90,90,.1)", fontSize: "1.05rem", fontWeight: "bold"}}>
					{props.children}
				</span>
			</Row>
		</Motioner>
	)
}

export const motionValues = {
	in: {opacity: 1, y: 0, scale: 1, x: 0},
	Scale_Big: {scale: 3, opacity: 0},
	Scale_Small: {scale: 0.3, opacity: 0},
	Fade: {opacity: 0},
	from_left: {y: -1000, opacity: 0.5},

	transition: {duration: 0.3},
}

export const localStorageStrings = {
	user_name: "user name",
	user_id: "user id",
	user_logged_in: "am i logged in bro?",
}
