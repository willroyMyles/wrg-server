import React from "react"
import {Row} from "antd"
import Text from "antd/lib/typography/Text"

interface IProps {
	crumbs: Array<string>
}

const Bread = (props: IProps) => {
	return (
		<Row justify="center" style={{width: "100%", marginBottom: 15}}>
			{props.crumbs.map((value, index) => {
				return (
					<>
						<Text style={{fontSize: ".8rem", marginRight: 12}}>{value}</Text>
						{index != props.crumbs.length - 1 && <Text style={{fontSize: "1rem", marginRight: 12}}>|</Text>}
					</>
				)
			})}
		</Row>
	)
}

export default Bread
