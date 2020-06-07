import React, {memo} from "react"
import {observer} from "mobx-react"
import {Row, Menu, Radio, Col} from "antd"
import {BsHouse} from "react-icons/bs"
import Text from "antd/lib/typography/Text"
import dataProvider from "../../dataLayer/DataStore"
import {ClickParam} from "antd/lib/menu"
import {strToNum} from "../../helpers"
import uiStore from "../../dataLayer/UIStore"

const Links = memo(
	observer(function Links() {
		const handleClick = (e: ClickParam) => {
			const num = strToNum(e.key)
			uiStore.indexes.set(0, num)
			uiStore.viewSet = true
		}

		return (
			<Row align="middle">
				<Menu onClick={handleClick} mode="inline" defaultSelectedKeys={["-1"]}>
					<Menu.Item key="-1" defaultChecked>
						<Text className="side-links">home</Text>
					</Menu.Item>

					{dataProvider.headers.map((value, index) => {
						return (
							<Menu.Item key={index}>
								<Text ellipsis={false} className="side-links">
									{value}
								</Text>
							</Menu.Item>
						)
					})}
				</Menu>
			</Row>
		)
	})
)

export default Links
