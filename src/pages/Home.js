import React from 'react';
import AppHeader from '../components/AppHeader';
import LogoHeader from '../components/LogoHeader';
import Quotes from '../components/Quotes';
import InfoSection from '../components/Info';
import MemberJoinSection from '../components/MemberJoinSection';

import { Typography } from '@material-ui/core';

export default () => (
	<div>		
		<Typography variant="h4" />
		<LogoHeader />
		<Quotes />
		<InfoSection />
		<MemberJoinSection />
	</div>
);
