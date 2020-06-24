import React, {ReactNode} from "react"
import {motion, AnimatePresence, MotionProps} from "framer-motion"
import {motionValues} from "./Helpers_Index"
import {CSSProperties} from "styled-components"

interface Props {
	children: ReactNode
	style?: CSSProperties

	motion?: MotionProps
}
const Motioner = (props: Props) => {
	const val = motionValues.Scale_Small
	return (
		<AnimatePresence>
			<motion.div style={{...props.style}} initial={val} animate={motionValues.in} exit={val}>
				{props.children}
			</motion.div>
		</AnimatePresence>
	)
}

export default Motioner
