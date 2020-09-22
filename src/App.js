import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CssBaseline} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




const BaseApp = ({ className }) => (
	<main className={className}>

	</main>
);

const App = styled(BaseApp)({
  backgroundImage: 'linear-gradient(0deg, #c7ddea 0%, white 40%, white 100%)',
  backgroundAttachment: 'fixed'
})

export default App;
