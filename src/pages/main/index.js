import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from '~/store/ducks/favorites';

class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    this.props.addFavoriteRequest();
  }

  renderMovies = movie => {
    return (
      <View style={styles.renderMovie}>
        <View>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Details', {
                id: movie.id,
              })
            }
          >
            <Image
              style={styles.image}
              source={{
                uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    const movies = this.props.favorites.data;
    //movies.map(item => this.renderList(item));
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Today's Highlight</Text>
        </View>

        <View style={styles.content}>
          <View>
            <Image
              style={styles.imageDestaque}
              source={{
                uri: 'https://image.tmdb.org/t/p/w500' + movies[0].poster_path,
              }}
            />
          </View>

          <View>
            <Text style={styles.textTitle}>{movies[0].title}</Text>
            <Text style={styles.text} textBreakStrategy={'highQuality'}>
              {movies[0].overview}
            </Text>
            <Text style={styles.vote}>
              Averange grade: {movies[0].vote_average}
            </Text>
          </View>
        </View>

        <View style={styles.scrollView}>
          <View>
            <Text style={styles.maisFilmes}>More Movies</Text>
          </View>
          <ScrollView horizontal>
            {movies.map(movie => this.renderMovies(movie))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
