import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

import FavoriteItem from './components/FavoriteItem';

import { connect } from 'react-redux';

class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus favoritos'
  };

  static propTypes = {
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      })
    ).isRequired,
  };

  renderList = () => {
    return (
      <FlatList
        data={this.props.favorites.data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <FavoriteItem favorite={item} />}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.props.favorites.data ? (
          <Text style={styles.empty}>Nenhum favorito adicionado</Text>
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps)(Favorites);
