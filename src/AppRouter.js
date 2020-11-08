import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import { Provider } from 'react-redux'
import store from './ReduxStore';

// Lobs Containers
import UsersLanding from './Lobs/Users/Redux/UsersContainer';
import PostsLanding from './Lobs/Posts/Redux/PostsContainer';

const AppRouter = () => {
	return (
		<Provider store={store} >
			<Router>
				<Stack key="root">
					<Scene 
						key="usersLanding"
						component={UsersLanding}
						initial
					/>
					<Scene 
						key="postsLanding"
						component={PostsLanding}
					/>
				</Stack>
			</Router>
		</Provider>
	);
}

export default AppRouter;