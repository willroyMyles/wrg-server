import React, {PureComponent, Component} from "react"
import {Tag, Col, Row} from "antd"

interface IProps {
	tags: Array<string>
	initial: string

	onChanged: (index: number) => void
	// onChanged: (index: number) => boolean
}
export class TagGroup extends Component<IProps> {
	state = {
		check: new Map<number, boolean>(),
		firstRun: false,
	}

	constructor(props: IProps) {
		super(props)

		props.tags.forEach((tag, index) => {
			this.state.check.set(index, false)
		})
	}

	componentDidMount() {
		this.setState({firstRun: false})
	}

	uncheckedAll = () =>
		this.state.check.forEach((_, __) => {
			this.state.check.set(__, false)
		})

	setCheckValue = (index: number, value: boolean) => {
		this.uncheckedAll()
		this.state.check.set(index, value)
		this.props.onChanged(index)
		this.forceUpdate()
	}

	render() {
		return (
			<Row>
				{this.props.tags.map((value, index) => {
					var initial = false
					if (value == this.props.initial && this.state.firstRun) initial = true
					if (this.state.check.get(index)) initial = true
					return (
						<Col>
							<Tag.CheckableTag
								checked={initial ? true : false}
								onChange={(v) => this.setCheckValue(index, v)}
								style={{
									margin: 0,

									border: "0px solid rgba(0,0,0,.2)",
									backgroundColor: initial ? "rgb(190, 204, 214,1)" : "transparent",
									color: "rgb(124, 133, 142,1)",
									padding: 7,
									paddingLeft: 10,
									paddingRight: 10,
									fontWeight: "bold",
									fontSize: ".80rem",
									cursor: "hand",
								}}>
								{value}
							</Tag.CheckableTag>
						</Col>
					)
				})}
			</Row>
		)
	}
}

export default TagGroup
