import React, {ReactNode} from "react"
import {motion, AnimatePresence} from "framer-motion"
import {motionValues} from "./Helpers_Index"

interface Props {
	children: ReactNode
}
const Motioner = (props: Props) => {
	return (
		<AnimatePresence>
			<motion.div
				initial={motionValues.initial_Scale_Big}
				animate={motionValues.in}
				exit={motionValues.initial_Scale_Big}>
				{props.children}
			</motion.div>
		</AnimatePresence>
	)
}

export default Motioner
