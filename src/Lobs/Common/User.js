import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {UserCss} from '../Users/Components/UsersCss';

const User = ({card, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(card)}
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

export default User;