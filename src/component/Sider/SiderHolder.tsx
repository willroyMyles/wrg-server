import React, {memo} from "react"
import PropTypes from "prop-types"
import Top from "./Top"
import Links from "./Links"

const SiderHolder = memo(function SiderHolder() {
	return (
		<div style={{minHeight: "100vh"}}>
			<Top />
			<Links />
		</div>
	)
})

export default SiderHolder
