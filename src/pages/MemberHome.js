import React, { useState } from 'react';
import ActivityCard from './../components/ActivityCard';
import MemberAside from './../components/MemberAside';
import styled from 'styled-components';

const imageOffset = '272px'

const StyledRoot = styled.div`
	padding-left: 40px;
	border: 1px solid red;
	display: flex;
	align-items: start;
	flex: 1 1;
	background-image: linear-gradient(180deg, transparent ${imageOffset}, #000 calc(${imageOffset} + 1px), #f5f5f5 calc(${imageOffset} + 1px));
	background-attachment: fixed;
`
const StyledMain = styled.main`
	width: 100%;
	h2 {
		padding: 8px 40px;
		// color: white;
	}
`
const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 40px;
	padding: 40px;
`
const activities = [
	{ title: 'Apply for a Program', src: './images/Icons/apps-active.png' },
	{ title: 'Begin my Training', src: './images/Icons/training-active.png' },
	{ title: 'Join the Community', src: './images/Icons/community-active.png' },
	{ title: 'RSVP for an Event', src: './images/Icons/events-active.png' },
]

const MemberHome = () => {
	const [user, setUser] = useState('John')

	return (
		<StyledRoot>
			<MemberAside />
			<StyledMain>
				<h2>Hello <b>{user}</b>. What would you like to do?</h2>
				<StyledGrid>
					{
						activities.map((activity) => 
							<ActivityCard
								title={activity.title}
								imgSrc={activity.src}
							/>
						)
					}
				</StyledGrid>
			</StyledMain>
		</StyledRoot>
	);
}
 
export default MemberHome;