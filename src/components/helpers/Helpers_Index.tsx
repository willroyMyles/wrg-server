import {createBrowserHistory} from "history"
import Text from "antd/lib/typography/Text"
import React from "react"
import {motion} from "framer-motion"
import {Row} from "antd"
export const sideHistory = createBrowserHistory()

export const ErrorLabel = (text: string | any) => {
	console.log(text)
	return (
		<motion.span
			style={{width: "100%", border: "0px solid red"}}
			initial={motionValues.initial_Scale_Big}
			animate={motionValues.in}
			className="error-text">
			<Row justify="center">{text.text}</Row>
		</motion.span>
	)
}

export const motionValues = {
	in: {opacity: 1, y: 0, scale: 1, x: 0},
	initial_Scale_Big: {scale: 3, opacity: 0},
	initial_Scale_Small: {scale: 0.3, opacity: 0},
	initial_Fade: {opacity: 0},
	transition: {duration: 0.3},
}

export const localStorageStrings = {
	user_name: "user name",
	user_id: "user id",
	user_logged_in: "am i logged in bro?",
}
