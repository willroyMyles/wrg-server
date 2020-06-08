import React, {memo} from "react"
import {observer} from "mobx-react"
import {Row, Menu, Radio, Col} from "antd"
import {BsHouse} from "react-icons/bs"
import Text from "antd/lib/typography/Text"
import dataProvider from "../../dataLayer/DataStore"
import {ClickParam} from "antd/lib/menu"
import {strToNum} from "../../helpers"
import uiStore from "../../dataLayer/UIStore"
import {Link} from "react-router-dom"

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
					<Menu.Item key="" defaultChecked>
						<Link to={`/home` || "/"}>
							<Text ellipsis={false} className="side-links">
								Home
							</Text>
						</Link>
					</Menu.Item>

					{dataProvider.headers.map((value, index) => {
						return (
							<Menu.Item key={index}>
								<Link to={`${index}`}>
									<Text ellipsis={false} className="side-links">
										{value}
									</Text>
								</Link>
							</Menu.Item>
						)
					})}
				</Menu>
			</Row>
		)
	})
)

export default Links
