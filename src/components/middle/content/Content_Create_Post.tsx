import React, {useEffect, useState} from "react"
import {Row, Col, Button, message, Select, Tooltip, DatePicker, Cascader, Input} from "antd"
import BackButton from "../../helpers/BackButton"
import Title from "antd/lib/typography/Title"
import {useForm, Controller} from "react-hook-form"
import logger from "../../helpers/Logger"
import Text from "antd/lib/typography/Text"
import {Winput} from "../../helpers/Styled"
import {BsAlarm} from "react-icons/bs"
import TextArea from "antd/lib/input/TextArea"
import {ErrorLabel, TextHeading} from "../../helpers/Helpers_Index"
import dataExchanger from "../../../data_layer/DataExchange"
import {observer} from "mobx-react"
import Motioner from "../../helpers/Motioner"
import dataProvider from "../../../data_layer/DataProvider"
import {OptionType} from "antd/lib/select"
import {theme} from "../../../Theme"
import eventEmitter, {eventStrings} from "../../helpers/EventEmitters"
type FormData = {
	title: string
	content: string
	make_model: any
	cat_sub: any
	year: string | null
}

const Content_Create_Post = observer(() => {
	const {handleSubmit, errors, clearError, watch, setValue, control, reset, getValues} = useForm<FormData>()
	const [loading, setLoading] = useState(false)

	const [make, setMake] = useState("")
	const [model, setmodel] = useState("")

	const [cat, setCat] = useState("")
	const [sub, setsub] = useState("")

	const catoptions = [
		dataProvider.data.map((array, index) => {
			return {
				value: index,
				label: array[0],
				index: index,
				children: array.map((val, idx) => {
					if (idx == 0) return {value: idx, label: " all", index: idx}
					return {value: idx, label: val, index: idx}
				}),
			}
		}),
	]

	const caroptions = [
		dataProvider.carData.map((array, index) => {
			return {
				value: index,
				label: array[0],
				index: index,
				children: array.map((val, idx) => {
					if (idx == 0) return {value: idx, label: " all", index: idx}
					return {value: idx, label: val, index: idx}
				}),
			}
		}),
	]

	const handleYearSelect = (e: any) => {
		setValue("year", e._d)
	}

	const onSubmit = (data: FormData) => {
		dataExchanger.sendCreatePostData(data).then((res) => {
			setLoading(true)

			if (res) {
				setLoading(false)
				eventEmitter.emit(eventStrings.showDrawer, false)
				message.success({
					content: "post created",
				})
			} else {
				message.error({
					content: "something went wrong",
				})
				setLoading(false)
			}
		})
	}

	return (
		<Motioner style={{background: theme.faint}}>
			<TextHeading>Create Post</TextHeading>
			<Row justify="center" style={{}}>
				<form
					id="createForm"
					onSubmit={handleSubmit(onSubmit)}
					style={{
						width: "70%",
						// border: "2px solid rgba(100,100,100,.6)",
						padding: 25,
						borderRadius: 7,
						// backgroundColor: theme.text_white,
					}}>
					<Row style={{marginTop: 25}}>
						<Col span={24}>
							<Row className="form-label">Title</Row>
							<Controller
								as={<Input className="styled-input" placeholder="place title here..." />}
								control={control}
								rules={{required: "Title required"}}
								name="title"
							/>
							{errors.title && <ErrorLabel text={errors.title.message?.toString()} />}
						</Col>
					</Row>
					<Row justify="center">
						<Col span={24}>
							<Row className="form-label">Content</Row>
							<Controller
								as={<TextArea rows={4} placeholder="place content here..." />}
								control={control}
								rules={{required: "Content required"}}
								name="content"
							/>
							{errors.content && <ErrorLabel text={errors.content.message?.toString()} />}
						</Col>
					</Row>
					<Row justify="center" gutter={[10, 0]}>
						<Col span={24}>
							<Row className="form-label">Make & Model</Row>
							<Controller
								as={
									<Cascader
										expandTrigger="click"
										options={caroptions[0]}
										value={[make, model]}
										onChange={(e: any) => {
											setMake(e[0])
											setmodel(e[1])
										}}
									/>
								}
								control={control}
								rules={{required: "Make of vehicle required"}}
								name="make_model"
							/>
							{errors.make_model && <ErrorLabel text={errors.make_model.message?.toString()} />}
						</Col>
					</Row>
					<Row justify="center" gutter={[10, 0]}>
						<Col span={24}>
							<Row className="form-label">Category & Sub-Category</Row>
							<Controller
								as={
									<Cascader
										expandTrigger="click"
										options={catoptions[0]}
										value={[cat, sub]}
										onChange={(e: any) => {
											setCat(e[0])
											setsub(e[1])
										}}
									/>
								}
								control={control}
								rules={{required: "Category of post required"}}
								name="cat_sub"
							/>
							{errors.cat_sub && <ErrorLabel text={errors.cat_sub.message?.toString()} />}
						</Col>
					</Row>
					<Row justify="center">
						<Col span={24}>
							<Row className="form-label">Year (optional)</Row>
							<Controller
								as={
									<DatePicker
										// onChange={(val, dat) => handleYearSelect(dat)}
										onSelect={(e) => handleYearSelect(e)}
										picker="year"
										placeholder="Select year"
									/>
								}
								control={control}
								// rules={{required: "Content required"}}
								name="year"
							/>
							{errors.year && <ErrorLabel text={errors.year.message?.toString()} />}
						</Col>
					</Row>
					<Row justify="center" style={{marginTop: 30}}>
						<Col span={24}>
							<Button type="primary" loading={loading} htmlType="submit" block>
								Submit
							</Button>
						</Col>
					</Row>
				</form>
			</Row>
		</Motioner>
	)
})

export default Content_Create_Post
