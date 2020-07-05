import React, {PureComponent, Component} from "react"
import {Tag, Col, Row} from "antd"
import Motioner from "./Motioner"
import {theme} from "../../Theme"
import {motionValues} from "./Helpers_Index"

interface IProps {
	tags: Array<string> | undefined
	initial?: number

	onChanged: (index: number, name: string) => void
	// onChanged: (index: number) => boolean
}
export class TagGroup extends Component<IProps> {
	state = {
		check: new Map<number, boolean>(),
		firstRun: false,
	}

	constructor(props: IProps) {
		super(props)

		props.tags?.forEach((tag, index) => {
			this.state.check.set(index, false)
			if (index == props.initial) this.state.check.set(index, true)
		})

		// if (props.initial) this.state.check.set(props.initial, true)
	}

	componentDidMount() {
		this.setState({firstRun: false})
	}

	uncheckedAll = () =>
		this.state.check.forEach((_, __) => {
			this.state.check.set(__, false)
		})

	setCheckValue = (index: number, value: boolean, name: string) => {
		this.uncheckedAll()
		this.state.check.set(index, value)
		this.props.onChanged(index, name)
		this.forceUpdate()
	}

	render() {
		return (
			<Row style={{backgroundColor: "rgba(0,0,0,.01)", borderRadius: 7}}>
				{this.props.tags?.map((value, index) => {
					var initial = false
					// if (value == this.props.initial && this.state.firstRun) initial = true
					if (this.state.check.get(index)) initial = true
					// if (this.props.initial == index) initial = true
					return (
						<Col>
							<Motioner>
								<Tag.CheckableTag
									checked={initial}
									onChange={(v) => this.setCheckValue(index, v, value)}
									style={{
										margin: 4,
										marginTop: 10,

										border: "0px solid rgba(0,0,0,.2)",
										// backgroundColor: initial ? "rgb(190, 204, 214,.3)" : "transparent",
										backgroundColor: "transparent",
										color: initial ? "rgb(94, 103, 112,1)" : "rgb(124, 133, 142,1)",
										// boxShadow: initial ? "0px 0px 10px rgba(100,100,100,.4)" : "none",
										padding: 7,
										paddingLeft: 10,
										paddingRight: 10,
										fontWeight: "bold",
										fontSize: ".80rem",
										cursor: "hand",
										// fontFamily: "Roboto",
									}}>
									{value}
									{initial && (
										<Motioner motionValue={motionValues.Scale_Small}>
											<div
												style={{
													// position: "absolute",
													marginLeft: "-5%",
													bottom: 0,
													marginTop: 3,
													width: "110%",
													height: 2,
													backgroundColor: "rgba(0,0,10,1)",
													opacity: 0.4,
													boxShadow: "5px 5px 1px rgba(0,0,0,.3)",
												}}
											/>
										</Motioner>
									)}
								</Tag.CheckableTag>
							</Motioner>
						</Col>
					)
				})}
			</Row>
		)
	}
}

export default TagGroup
