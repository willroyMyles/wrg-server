import React, {memo} from "react"
import PropTypes from "prop-types"
import Top from "./Top"
import Links from "./Links"
import SiderFooter from "./SiderFooter"

const SiderHolder = memo(function SiderHolder() {
	return (
		<div
			style={{
				minHeight: "100vh",
				flexDirection: "column",
				display: "flex",
				justifyContent: "space-between",
			}}>
			<Top />
			<Links />
			<SiderFooter />
		</div>
	)
})

export default SiderHolder
