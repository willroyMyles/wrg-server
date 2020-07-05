import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import dataProvider from "../../../data_layer/DataProvider"
import Motioner from "../../helpers/Motioner"
import {TextHeading, TextHint} from "../../helpers/Helpers_Index"
import {Button, Row, Affix, Col, Popover} from "antd"
import {observer} from "mobx-react"
import TagGroup from "../../helpers/TagGroup"
import Content_List_2 from "./Content_List_2"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"
import {BsTools} from "react-icons/bs"

const Content_Page2 = observer(() => {
	const {id, sub} = useParams()

	const [category, setcategory] = useState("")
	const [, setsubcategory] = useState("")

	const [categoryNum, setcategoryNum] = useState<number>(-1)
	const [subcategoryNum, setsubcategoryNum] = useState<number>(-1)

	const [, setAffixed] = useState(false)

	useEffect(() => {
		if (id != undefined) setcategoryNum(Number.parseInt(id))
		if (sub != undefined) setsubcategoryNum(Number.parseInt(sub))

		if (categoryNum != -1 && categoryNum != undefined) setcategory(dataProvider.headers[categoryNum])
		if (subcategoryNum != -1 && subcategoryNum != undefined)
			setsubcategory(dataProvider.parts[categoryNum][subcategoryNum])
	})

	return (
		<div style={{width: "100%", overflowX: "hidden", overflowY: "scroll"}}>
			<Row justify="space-between" align="middle">
				<Row align="middle" style={{flexDirection: "row"}}>
					<TextHeading>{category}</TextHeading>
					<Popover
						placement="bottom"
						trigger="click"
						content={
							<Col>
								{dataProvider.headers.map((value, index) => {
									return (
										<Row>
											<Button
												icon={<BsTools style={{marginRight: 5}} />}
												onClick={() => {
													eventEmitter.emit(eventStrings.category, index)
												}}
												size="large"
												type="link"
												style={{margin: 5, paddingBottom: 5}}>
												{value}
											</Button>
										</Row>
									)
								})}
							</Col>
						}>
						<Button type="text">
							<TextHint>change</TextHint>
						</Button>
					</Popover>
				</Row>
				<Affix offsetTop={30} onChange={(isAffixed) => setAffixed(isAffixed || false)}>
					<Motioner>
						<Button
							style={{
								boxShadow: "0px 0px 15px rgba(100,100,100,.3)",
								// boxShadow: theme.boxShadow,
								border: "none",
								textShadow: "0px 0px 1px rgba(0,0,0,.1)",
								fontWeight: "bold",
							}}
							onClick={() => {
								eventEmitter.emit(eventStrings.createPost)
							}}
							type="primary">
							Create Post
						</Button>
					</Motioner>
				</Affix>
			</Row>
			<Row>
				<TagGroup
					initial={0}
					tags={dataProvider.parts[Number.parseInt(id)]}
					onChanged={(index) => console.log(index)}
				/>
			</Row>
			<Row style={{padding: 5}}>
				<Content_List_2 cat={categoryNum} sub={0} />
			</Row>
		</div>
	)
})

export default Content_Page2
