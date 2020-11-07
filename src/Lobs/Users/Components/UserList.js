import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {UserCss} from './UsersCss';

const UserList = ({users}) => {
  if (users && users.length > 0) {
    return (
      <FlatList
        data={users}
        renderItem={({item, index}) => (
          <User card={item} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={UserCss.container}
      />
    );
  }
  return [];
}

const User = ({card}) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      activeOpacity={0.8}
    >
      <View style={UserCss.cardContainer}>
        <Text>NAME: {card.name}</Text>
        <Text>EMAIL: {card.email}</Text>
        <Text>GENDER: {card.gender}</Text>
        <Text>STATUS: {card.status}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default UserList;