import React from "react"
import Title from "antd/lib/typography/Title"
import {localStorageStrings} from "../../helpers/Helpers_Index"
import {Row, Col} from "antd"

const Content_Home = () => {
	return (
		<div>
			hi
			<Title>{localStorage.getItem("name")}</Title>
			<Title>{localStorage.getItem(localStorageStrings.user_name)}</Title>
			<Title>{localStorage.getItem(localStorageStrings.user_id)}</Title>
			<Title>{localStorage.getItem("name")}</Title>
		</div>
	)
}

export default Content_Home
