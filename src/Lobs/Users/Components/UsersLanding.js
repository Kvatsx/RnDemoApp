import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {MainContainer, LandingLoader} from './UsersCss';

import UserList from './UserList';

class UsersLanding extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <View style={MainContainer.container}>
        {this.props.isLoading && this.renderLoader()}
        {this.props.isSuccess && this.renderContent()}
      </View>
    );
  };

  renderLoader = () => (
    <View style={LandingLoader.container}>
      <ActivityIndicator size="large" color="#000000" />
    </View>
  );

  renderContent = () => (
    <UserList users={this.props.users} onPress={this.userCardOnPress} />
  );

  userCardOnPress = (card) => {
    console.log(card);
    console.log(Actions.currentScene);
    Actions.postsLanding({
      user: card
    });
  }
}

export default UsersLanding;