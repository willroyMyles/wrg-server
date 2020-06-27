import React, {useState} from "react"
import {Radio, Row, Button} from "antd"
import {NONAME} from "dns"

interface IProps {
	btns: Array<string>
	onSelect: (name: string) => void
}

const RadioGroups = (props: IProps) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	return (
		<Row>
			{props.btns.map((value, index) => {
				const checked = currentIndex == index
				return (
					<>
						<Button
							onClick={() => {
								setCurrentIndex(index)
								props.onSelect(value)
							}}
							style={{
								backgroundColor: "transparent",
								border: "none",
								marginLeft: 5,
								marginRight: 5,
								borderLeft: "none",
								textTransform: "capitalize",
								// borderBottom: checked ? "3px solid rgba(0,200,180,.9)" : "none",
								color: checked ? "rgba(0,200,180,.9)" : "darkgrey",
							}}
							value={index}>
							{value}
							<div
								style={{
									height: 3,
									marginLeft: "",
									width: "100%",
									backgroundColor: checked ? "rgba(0,200,180,.9)" : "transparent",
								}}
							/>
						</Button>
					</>
				)
			})}
		</Row>
	)
}

export default RadioGroups
