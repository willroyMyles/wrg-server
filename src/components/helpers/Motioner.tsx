import React, {ReactNode, Component} from "react"
import {motion, AnimatePresence, MotionProps, MotionValue} from "framer-motion"
import {motionValues} from "./Helpers_Index"
import {CSSProperties} from "styled-components"

interface Props {
	children: ReactNode
	style?: CSSProperties

	motion?: MotionProps

	motionValue?: any
}

class Motioner extends Component<Props> {
	state = {
		visible: true,
	}
	componentWillUnmount() {
		this.setState({visible: false})
	}
	render() {
		const val = this.props.motionValue ? this.props.motionValue : motionValues.Fade
		return (
			<AnimatePresence exitBeforeEnter>
				{this.state.visible && (
					<motion.div
						whileHover={this.props.motion?.whileHover}
						whileTap={this.props.motion?.whileTap}
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
