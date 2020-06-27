import React, {ReactNode, Component} from "react"
import {motion, AnimatePresence, MotionProps} from "framer-motion"
import {motionValues} from "./Helpers_Index"
import {CSSProperties} from "styled-components"

interface Props {
	children: ReactNode
	style?: CSSProperties

	motion?: MotionProps
}
// const Motioner = (props: Props) => {
// 	const val = motionValues.none
// 	return (
// 		<motion.div
// 			transition={motionValues.transition}
// 			style={{...props.style}}
// 			initial={val}
// 			animate={motionValues.in}
// 			exit={val}>
// 			{props.children}
// 		</motion.div>
// 	)
// }

class Motioner extends Component<Props> {
	state = {
		visible: true,
	}
	componentWillUnmount() {
		this.setState({visible: false})
	}
	render() {
		const val = motionValues.Fade
		return (
			<AnimatePresence exitBeforeEnter>
				{this.state.visible && (
					<motion.div
						transition={motionValues.transition}
						style={{...this.props.style}}
						initial={val}
						animate={motionValues.in}
						exit={val}>
						{this.props.children}
					</motion.div>
				)}
			</AnimatePresence>
		)
	}
}

export default Motioner
