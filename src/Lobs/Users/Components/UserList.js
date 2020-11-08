import React from 'react';
import {FlatList} from 'react-native';
import User from '../../Common/User';
import {UserCss} from './UsersCss';

const UserList = ({users, onPress}) => {
  if (users && users.length > 0) {
    return (
      <FlatList
        data={users}
        renderItem={({item, index}) => (
          <User card={item} onPress={onPress} />
        )}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={UserCss.container}
      />
    );
  }
  return [];
}

export default UserList;