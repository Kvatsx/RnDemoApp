import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import { Provider } from 'react-redux'
import store from './ReduxStore';

// Lobs Containers
import UsersLanding from './Lobs/Users/Redux/UsersContainer';

const AppRouter = () => {
	return (
		<Provider store={store} >
			<Router>
				<Stack key="root">
					<Scene 
						key="usersLanding"
						component={UsersLanding}
						title="Users"
						initial
					/>
				</Stack>
			</Router>
		</Provider>
	);
}

export default AppRouter;