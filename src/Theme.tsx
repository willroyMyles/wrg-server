import {blue, green, generate, grey} from "@ant-design/colors"
import {CSSProp, CSSProperties} from "styled-components"

const col = generate("#0aa", {
	theme: "default",
	backgroundColor: "#fff",
})
const opacity = "ff"
const D = col
const primary_color = D[6] + opacity
const secondaryColor = D[2]
const shadowColor = D[2]
const faint = D[0]
const headingColor = D[9]
const titleColor = D[9]
const textColor = grey[7]
const textWhite = "white"

export const theme = {
	primary_color: primary_color,
	secondary_Color: secondaryColor,
	shadow_color: shadowColor,
	boxShadow: `0px 0px 15px ${shadowColor}99`,
	faint: faint + "22",
	text_light: grey[3],
	text_extra_light: grey[0],
	text_medium: grey[6],
	text_heavy: grey[9],
	text_white: textWhite,
}

const text: CSSProperties = {
	color: textColor,
	fontSize: "1rem",
	textShadow: `0px 0px 1px ${grey[1]}`,
}
