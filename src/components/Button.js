import React from "react"
import "./Button.css"

const STYLES = ["btn--primary", "btn--ouline"]
const SIZES = ["btn--md", "btn--lg", "btn--mb", "btn--wide"]
const COLOR = ["primary", "red", "green", "blue"]

export const Button = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize,
	buttonColor,
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0]
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
	const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0]

	return (
		<button
			className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
			onClick={onClick}
			type={type}>
			{children}
			{/* This children thing would basically be whatever text we're gonna write to show up
			    on the button. */}
		</button>
	)
}
