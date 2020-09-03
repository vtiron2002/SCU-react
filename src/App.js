import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CssBaseline} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import InfoSection from './components/Info';
import MemberJoinSection from './components/MemberJoinSection';
import FollowUs from './components/FollowUs';
import LogoHeader from './components/LogoHeader'
import Quotes from './components/Quotes'


const BaseApp = ({ className }) => (
	<main className={className}>
		<CssBaseline />
		<LogoHeader />
		<Quotes />
		<InfoSection />
		<MemberJoinSection />
		<FollowUs />
	</main>
);

const App = styled(BaseApp)({
  backgroundImage: 'linear-gradient(0deg, #c7ddea 0%, white 40%, white 100%)',
  backgroundAttachment: 'fixed'
})

export default App;
