import React from 'react'

import styled from 'styled-components'

const StyledCard = styled.div`
	background-color: white;
	box-shadow: 0px 0px 16px -8px grey;
	border-radius: 40px;
	padding: 40px;
	img {
		width: 100%;
		margin: auto;
		display: block;
	}
	div {
		text-align: center;
	}
`

const ActivityCard = ({ title, imgSrc }) => {
	return (
		<StyledCard>
			<img src={imgSrc} alt="activity"/>
			<div>{title}</div>
		</StyledCard>
	);
}

export default ActivityCard;