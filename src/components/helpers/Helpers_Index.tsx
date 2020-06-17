import {createBrowserHistory} from "history"
import Text from "antd/lib/typography/Text"
import React from "react"
import {motion} from "framer-motion"
export const sideHistory = createBrowserHistory()

export const ErrorLabel = (text: string | any) => {
	console.log(text)
	return (
		<motion.div initial={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} className="error-text">
			{text.text}
		</motion.div>
	)
}
