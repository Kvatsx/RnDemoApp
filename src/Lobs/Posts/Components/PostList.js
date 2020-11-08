import React from 'react';
import {FlatList} from 'react-native';
import Post from '../../Common/Post';
import {PostCss} from './PostCss';

const PostList = ({posts}) => {
  if (posts && posts.length > 0) {
    return (
      <FlatList
        data={posts}
        renderItem={({item, index}) => (
          <Post post={item} />
        )}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={PostCss.container}
      />
    );
  }
  return [];
}

export default PostList;