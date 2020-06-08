import styled, {StyledComponent} from "styled-components"
import {Input, Button} from "antd"
import Title from "antd/lib/typography/Title"
import FormItem from "antd/lib/form/FormItem"

const mainCol = "rgba(121,132,141,1)"

export const WRGInput: StyledComponent<typeof Input, any, {}, never> = styled(Input)`
	border-radius: 0px;
	margin: 0px;
	background-color: transparent;
	border: none;
	border-bottom: 3px solid ${mainCol};
	color: ${mainCol};
	font-weight: 700;
	outline: transparent;
`

export const WRGFormItem = styled(FormItem)`
	color: red;
	padding: 0px;
	justify-content: center;
	margin: 0px;
	margin-top: 0px;
	background-color: transparent;

	margin-bottom: 10px;
`
export const WRGsmall = styled.small`
	color: rgba(0, 0, 0, 0.4);
	padding: 2px;
	font-weight: 600;
	font-size: 0.75rem;
`

export const WRGTitle = styled.span`
	color: rgba(121, 132, 141, 1);
	font-size: 3.5rem;
	font-weight: 700;
	text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
`

export const WRGLargeButton = styled(Button)`
	color: ${(props) => (props.type == "ghost" ? mainCol : "white")};
	font-size: 1.1rem;
	// padding: 1.8rem;
	padding-left: 2rem;
	padding-right: 2rem;
	font-weight: 600;
`
