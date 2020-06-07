import React, {PureComponent} from "react"
import {Row, Col, Button} from "antd"
import {observer} from "mobx-react"
import dataProvider from "../../dataLayer/DataStore"
import {BsPersonFill, BsGearFill} from "react-icons/bs"
import Text from "antd/lib/typography/Text"
import {fontColor} from "../../helpers"

@observer
export class SiderFooter extends PureComponent {
	render() {
		return (
			<div style={{border: "0px solid green", padding: 10, paddingTop: 10, paddingBottom: 35}}>
				<Row align="middle" justify="center" hidden={!dataProvider.loggedIn}>
					<Col>
						<Row align="middle" justify="center" style={{marginBottom: 12}}>
							<BsPersonFill size={"1.1rem"} color={fontColor} />
							<Text style={{fontWeight: "bold", marginLeft: 5, fontSize: "1.05rem", color: fontColor}}>Account</Text>
						</Row>
						<Row align="middle" justify="center" style={{marginBottom: 8}}>
							<BsGearFill size={"1.1rem"} color={fontColor} />
							<Text style={{fontWeight: "bold", marginLeft: 5, fontSize: "1.05rem", color: fontColor}}>Settings</Text>
						</Row>
					</Col>
				</Row>

				<Row justify="center" hidden={dataProvider.loggedIn}>
					<Button style={{boxShadow: "0px 0px 10px rgba(200,200,250,.2)"}}>Login or Sign up</Button>
				</Row>
				<div style={{height: "2vh"}}></div>
			</div>
		)
	}
}

export default SiderFooter
