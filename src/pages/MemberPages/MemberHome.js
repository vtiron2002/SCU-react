import React, { useState } from 'react';
import ActivityCard from '../../components/ActivityCard';
import styled from 'styled-components';

import AppsActiveIcon from '../../img/Icons/apps-active.png'
import TrainingActiveIcon from '../../img/Icons/training-active.png'
import CommunityActiveIcon from '../../img/Icons/community-active.png'
import EventsActiveIcon from '../../img/Icons/events-active.png'
import Member from './Member'; // include this for every member page that needs the member side


const StyledMain = styled.main`
	width: 100%;
	h2 {
		padding: 8px 40px;
		color: white;
	}
`

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 40px;
	padding: 40px;
`
const activities = [
	{ title: 'Apply for a Program', src: AppsActiveIcon, id: 1 },
	{ title: 'Begin my Training', src: TrainingActiveIcon, id: 2 },
	{ title: 'Join the Community', src: CommunityActiveIcon, id: 3 },
	{ title: 'RSVP for an Event', src: EventsActiveIcon, id: 4 },
]

const MemberHome = () => {
	const [user, setUser] = useState('John')

	return (
		<Member>
			<StyledMain>
				<h2>Hello <b>{user}</b>. What would you like to do?</h2>
				<StyledGrid>
					{
						activities.map((activity) => 
						<ActivityCard
							key={activity.id}
							title={activity.title}
							imgSrc={activity.src}
						/>
						)
					}
				</StyledGrid>
			</StyledMain>
		</Member>
	);
}
 
export default MemberHome;