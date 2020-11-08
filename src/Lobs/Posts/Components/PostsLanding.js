import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {MainContainer, LandingLoader} from './PostCss';

import User from '../../Common/User';
import PostList from './PostList';

class PostsLanding extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.user.id);
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
    <>
      <User card={this.props.user} />
      <PostList posts={this.props.posts} />
    </>
  );
}

export default PostsLanding;
