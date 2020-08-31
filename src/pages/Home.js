import React from 'react';
import {
	Typography,
} from '@material-ui/core';
import LogoHeader from '../components/LogoHeader'
import Quotes from '../components/Quotes'
import InfoSection from '../components/Info'
import MemberJoinSection from '../components/MemberJoinSection'

export default () => (
	<div>
		<Typography variant="h4" />
		<LogoHeader />
		<Quotes />
		<InfoSection />
		<MemberJoinSection />
	</div>
);
