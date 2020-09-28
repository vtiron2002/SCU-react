import React from 'react'
import styled from 'styled-components';

const GridDiv = styled.div`
	padding: 40px 32px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 32px;
	.member-aside-item {
		filter: grayscale(100%);
		&:hover {
			filter: none;
		}
		img {
			width: 64%;
			margin: auto;
			display: block;
		}
		div {
			text-align: center;
		}
	}
`
const StyledAside = styled.aside`
	background-color: white;
	box-shadow: 0px 0px 16px -8px grey;
	border-radius: 50px;
	overflow: hidden;
	flex: 0 0 300px;
	// height: 600px;
`
const StyledProfileDiv = styled.div`
	padding: 20px;
	background: #f5f5f5;
	img {
		width: 33%;
		margin: auto;
		display: block;
	}
	div {
		margin-top: 16px;
		text-align: center;
		font-family: 'Ubuntu', sans-serif;
		font-size: 20px;
		font-weight: 900;
	}
`

const activities = [
	{ title: 'Applications', src: './images/Icons/apps-active.png' },
	{ title: 'Training', src: './images/Icons/training-active.png' },
	{ title: 'Community', src: './images/Icons/community-active.png' },
	{ title: 'Events', src: './images/Icons/events-active.png' },
	{ title: 'Profile', src: './images/Icons/profile-active.png' },
	{ title: 'Notifications', src: './images/Icons/notification-active.png' },
]

const MemberAside = () => {
	return (
		<StyledAside>
			<StyledProfileDiv className="user-profile-info">
				<img className="profile-img" src="./images/logo.png" alt=""/>
				<div>John Doe</div>
			</StyledProfileDiv>
			<GridDiv>
				{
					activities.map(activity => 
						<div className="member-aside-item">
							<img src={activity.src} alt=""/>
							<div>{activity.title}</div>
						</div>
					)
				}
			</GridDiv>
		</StyledAside>
	);
}
 
export default MemberAside;