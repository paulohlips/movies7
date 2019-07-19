import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { Creators as DetailsActions } from '~/store/ducks/details';
import { colors } from '~/styles';

class Details extends Component {
  static navigationOptions = {
    title: 'Details',
    headerStyle: {
      backgroundColor: colors.darker,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontWeight: 'bold'
    },
  };
  componentWillMount() {
    this.props.addDetailsRequest(this.props.navigation.state.params.id);
  }

  render() {
    const movie = this.props.details.detailsData;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{movie.original_title}</Text>
        </View>

        <View style={styles.content}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            }}
          />
          <View>
            <Text style={styles.textTitle}>Popularoty: {movie.popularity}</Text>
            <Text style={styles.textTitle}>Budget: ${movie.budget}</Text>
            <Text style={styles.textTitle}>
              Averange grade: {movie.vote_average}
            </Text>
            <Text style={styles.textTitle}>
              Release date: {movie.release_date}
            </Text>
            <Text style={styles.textTitle}>IMDB: ${movie.imdb_id}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.text}>{movie.overview}</Text>
        </View>
        <View>
          <Text style={styles.text}>{movie.homepage}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
  details: state.details,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(DetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
