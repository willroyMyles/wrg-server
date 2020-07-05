import React, {useState, ReactNode} from "react"
import {Row, Col, Button, Input, Tooltip, notification} from "antd"
import RadioGroups from "../helpers/RadioGroups"
import Title from "antd/lib/typography/Title"
import {sideHistory, TextSubHeading} from "../helpers/Helpers_Index"
import eventEmitter, {eventStrings} from "../helpers/EventEmitters"
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint"
import {BsPlus, BsPerson, BsPersonBoundingBox, BsPersonFill, BsSearch} from "react-icons/bs"
import Text from "antd/lib/typography/Text"
import {useTheme} from "styled-components"
import {theme} from "../../Theme"
import Motioner from "../helpers/Motioner"
import {motion} from "framer-motion"
import Signup from "./account/Signup"
import dataExchanger from "../../data_layer/DataExchange"
import {observer} from "mobx-react"
import {Avatar} from "evergreen-ui"
import randomColor from "randomcolor"
import {ConfirmButton} from "../left/Left_Bottom"
import {Winput} from "../helpers/Styled"
import HeaderButton from "./content/headers/HeaderButton"

const Middle_Header = observer(() => {
	const bp = useBreakpoint()
	const [node, setNode] = useState<ReactNode>(<HeaderButton />)
	const pad = bp.xs ? 10 : 35
	return (
		<Motioner
			style={{
				marginTop: -10,
				marginBottom: 25,
				backgroundColor: "transparent",
				padding: 5,
				paddingLeft: pad,
				paddingRight: pad,
				// boxShadow: "0px 2px 5px rgba(200,200,200, .3)",
			}}>
			{node}
		</Motioner>
	)
})

export default Middle_Header
