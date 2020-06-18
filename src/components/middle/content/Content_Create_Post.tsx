import React, {useEffect, useState} from "react"
import {Row, Col, Input, Button, message, Select, Tooltip, DatePicker} from "antd"
import BackButton from "../../helpers/BackButton"
import Title from "antd/lib/typography/Title"
import {useForm, Controller} from "react-hook-form"
import logger from "../../helpers/Logger"
import Text from "antd/lib/typography/Text"
import {Winput} from "../../helpers/Styled"
import {BsAlarm} from "react-icons/bs"
import TextArea from "antd/lib/input/TextArea"
import {ErrorLabel} from "../../helpers/Helpers_Index"
import dataExchanger from "../../../data_layer/DataExchange"
import {observer} from "mobx-react"
import Motioner from "../../helpers/Motioner"
import dataProvider from "../../../data_layer/DataProvider"
import {OptionType} from "antd/lib/select"
type FormData = {
	title: string
	content: string
	make: string
	model: string
	category: number
	sub_category: number
	year: string
}

const Content_Create_Post = observer(() => {
	const {handleSubmit, errors, clearError, watch, setValue, control, reset, getValues} = useForm<FormData>()
	const [loading, setLoading] = useState(false)
	const [modelndex, setModelndex] = useState<number>()
	const [subindex, setSubindex] = useState<number>()

	const handleMakeChange = (e: any) => {
		setModelndex(e.key)

		setValue("make", e.value)
		setValue("model", e.value)

		console.log(getValues())
	}

	const handleCatChange = (e: any) => {
		setValue("cat", e.value)
		setValue("sub_category", 0)
		setSubindex(e.key)
	}

	const handleYearSelect = (e: any) => {
		setValue("year", e._d)
		console.log(getValues("year"))
	}

	const onSubmit = (data: FormData) => {
		dataExchanger.sendCreatePostData(data).then((res) => {
			setLoading(true)

			if (res) {
				setLoading(false)
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
		<Motioner>
			<Row>
				<BackButton />
			</Row>
			<div />
			<Row>
				<Title level={1}>Create Post</Title>
			</Row>
			<form id="createForm" onSubmit={handleSubmit(onSubmit)}>
				<Row justify="center" style={{marginTop: 25}}>
					<Col>
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
					<Col>
						<Row className="form-label">Content</Row>
						<Controller
							as={<TextArea className="styled-input" rows={4} placeholder="place content here..." />}
							control={control}
							rules={{required: "Content required"}}
							name="content"
						/>
						{errors.content && <ErrorLabel text={errors.content.message?.toString()} />}
					</Col>
				</Row>
				<Row justify="center" gutter={[10, 0]}>
					<Col>
						<Row className="form-label">Make</Row>
						<Controller
							as={
								<Select
									onSelect={(e, f) => handleMakeChange(f)}
									animation="fade"
									className="styled-input"
									placeholder="select make...">
									{dataProvider.car_make.map((value, index) => {
										return (
											<Select.Option value={value} key={index} title={value}>
												{value}
											</Select.Option>
										)
									})}
								</Select>
							}
							control={control}
							rules={{required: "Make of vehicle required"}}
							name="make"
							onChange={(na) => handleMakeChange(na)}
						/>
						{errors.make && <ErrorLabel text={errors.make.message?.toString()} />}
					</Col>
					<Col>
						<Row className="form-label">Model</Row>
						<Controller
							as={
								<Select className="styled-input" placeholder="place content here...">
									{modelndex &&
										dataProvider.car_model[modelndex].map((val, index) => {
											return (
												<Select.Option value={val} key={index} title={val}>
													{val}
												</Select.Option>
											)
										})}
								</Select>
							}
							control={control}
							rules={{required: "model required"}}
							name="model"
						/>
						{errors.model && <ErrorLabel text={errors.model.message?.toString()} />}
					</Col>
				</Row>
				<Row justify="center" gutter={[10, 0]}>
					<Col>
						<Row className="form-label">Category</Row>
						<Controller
							as={
								<Select
									onSelect={(e, f) => handleCatChange(f)}
									// options={dataProvider.headers.map((value, index) => {
									// 	return {value: value, title: value, key: index, label: value}
									// })}
									className="styled-input"
									placeholder="place content here...">
									{dataProvider.headers.map((value, index) => {
										return (
											<Select.Option key={index} value={index} title={value}>
												{value}
											</Select.Option>
										)
									})}
								</Select>
							}
							control={control}
							rules={{required: "Category required"}}
							name="category"
							// onChange={(na) => handleCatChange(na)}
						/>
						{errors.category && <ErrorLabel text={errors.category.message?.toString()} />}
					</Col>
					<Col>
						<Row className="form-label">Sub-Category</Row>
						<Controller
							as={
								<Select className="styled-input" placeholder="place content here...">
									{subindex &&
										dataProvider.parts[subindex].map((val, index) => {
											return (
												<Select.Option value={index} key={index} title={val}>
													{val}
												</Select.Option>
											)
										})}
								</Select>
							}
							control={control}
							rules={{required: "Sub-Category required"}}
							name="sub_category"
						/>
						{errors.sub_category && <ErrorLabel text={errors.sub_category.message?.toString()} />}
					</Col>
				</Row>
				<Row justify="center">
					<Col>
						<Row className="form-label">Year (optional)</Row>
						<Controller
							as={
								<DatePicker
									// onChange={(val, dat) => handleYearSelect(dat)}
									onSelect={(e) => handleYearSelect(e)}
									className="styled-input"
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
					<Col span={10}>
						<Button loading={loading} htmlType="submit" block>
							Submit
						</Button>
					</Col>
				</Row>
			</form>
		</Motioner>
	)
})

export default Content_Create_Post
