import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from '../../store/ducks/favorites';

import FavoriteItem from '~/components/FavoriteItem';

class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  static PropTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape),
      errorOnAdd: PropTypes.oneOfType([null, PropTypes.string]),
      loading: PropTypes.bool,
    }).isRequired,
  };

  // state = {
  //   repoNameInput: ''
  // };

  // navigateToFavorites = () => {
  //   this.props.navigation.navigate('Favorites');
  // };

  componentWillMount() {
    this.props.addFavoriteRequest();
  }
  // addRepository = () => {
  //   if (!this.state.repoNameInput.length) {
  //     return;
  //   }

  //   this.props.addFavoriteRequest();
  // };

  renderList = () => {
    const arr = {
      resposta: [
        'teste',
        {
          nome: 'paulo'
        },
      ],
    };
    const movies = this.props.favorites.data[0];
    console.tron.log('Movies', movies /*arr.resposta[1].nome*/);
    
    movies.map(item => console.tron.log(item));
    return (
      <FlatList
        data={this.props.favorites.data[0]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <FavoriteItem favorite={item} />}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.content}>
          <Text style={styles.title}>Gitmark</Text>
          <Text style={styles.description}>
            Comece adicionando alguns repositórios aos seus favoritos!
          </Text>

          <View style={styles.form}>
            {!!this.props.favorites.errorOnAdd && (
              <Text style={styles.error}>
                {this.props.favorites.errorOnAdd}
              </Text>
            )}

            <View style={styles.container}>
              {!this.props.favorites.data ? (
                <Text style={styles.empty}>Nenhum favorito adicionado</Text>
              ) : (
                this.renderList()
              )}
            </View>

            {/* <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="usuário/repositório"
              underlineColorAndroid="transparent"
              value={this.state.repoNameInput}
              onChangeText={repoNameInput => this.setState({ repoNameInput })}
            /> */}

            {/* <TouchableOpacity
              style={styles.button}
              onPress={this.addRepository}
              activeOpacity={0.6}
            >
              {this.props.favorites.loading ? (
                <ActivityIndicator size="small" color={styles.loading.color} />
              ) : (
                <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
              )}
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites}>
            <Text style={styles.footerLink}>
              Meus favoritos ({this.props.favorites.data.length})
            </Text>
          </TouchableOpacity>
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
