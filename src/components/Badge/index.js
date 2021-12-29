import React from 'react'

import './Badge.scss'

function Badge({color, onClick, className}) {
	return (
		<i onClick={onClick} className={`badge ${className} badge--${color}`}></i>
	)
}

export default Badge
