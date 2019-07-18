import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image } from 'react-native';

import styles from './styles';

const FavoriteItem = ({ favorite: { name, owner, description } }) => (
  <View style={styles.container}>
    {/* <Image style={styles.avatar} source={{ uri: owner.avatar_url }} />
    <View style={styles.info}>
      <Text styles={styles.title}>{name}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
    </View> */}
  </View>
);

FavoriteItem.prototypes = {
  favorite: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
    }),
  }).isRequired,
};

export default FavoriteItem;
