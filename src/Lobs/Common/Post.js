import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PostCss} from '../Posts/Components/PostCss';

const Post = ({post}) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      activeOpacity={0.8}
    >
      <View style={PostCss.cardContainer}>
        <Text>TITLE: {post.title}</Text>
        <Text>BODY: {post.body}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Post;