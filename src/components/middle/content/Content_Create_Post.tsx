import React, {useEffect, useState} from "react"
import {Row, Col, Input, Button, message} from "antd"
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
type FormData = {
	title: string
	content: string
}

const Content_Create_Post = observer(() => {
	const {handleSubmit, errors, clearError, watch, setValue, control} = useForm<FormData>()
	const [loading, setLoading] = useState(false)

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
		<div>
			<Row>
				<BackButton />
			</Row>
			<div />
			<Row>
				<Title level={1}>Create Post</Title>
			</Row>
			<form id="createForm" onSubmit={handleSubmit(onSubmit)}>
				<Row justify="center" gutter={[0, 20]} style={{marginTop: 25}}>
					<Col style={{width: "40%"}}>
						<Row className="form-label">title</Row>
						<Controller
							as={<Input className="styled-input" placeholder="place title here..." />}
							control={control}
							rules={{required: "Title required"}}
							name="title"
						/>
						<Row> {errors.title && <ErrorLabel text={errors.title.message?.toString()} />}</Row>
					</Col>
				</Row>
				<Row justify="center" gutter={[0, 20]}>
					<Col>
						<Row className="form-label">content</Row>
						<Controller
							as={<TextArea className="styled-input" rows={4} placeholder="place content here..." />}
							control={control}
							rules={{required: "Content required"}}
							name="content"
						/>
						<Row> {errors.content && <ErrorLabel text={errors.content.message?.toString()} />}</Row>
					</Col>
				</Row>
				<Row justify="center">
					<Col span={10}>
						<Button loading={loading} htmlType="submit" block>
							Submit
						</Button>
					</Col>
				</Row>
			</form>
		</div>
	)
})

export default Content_Create_Post
