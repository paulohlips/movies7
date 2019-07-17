import React, { Component } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from "react-native";

import styles from "./styles";
import api from "~/services/api";

export default class Home extends Component {
  state: {
    data: "vazio"
  };

  async getMovies() {
    try {
      const response = await api.get("/movie/popular", {
        params: {
          api_key: 'a99afce8877efd6ce0a3ba0c49e79efa',
          language: "pt-BR"
        },
      });
      this.setState({ data: response });
    } catch (error) {
      console.tron.error(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>7Movies</Text>
        </View>

        <View>
          <FlatList
            data={[{ key: "a" }, { key: "b" }]}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        </View>

        <View>
          <TouchableOpacity onPress={() => this.getMovies()}>
            <Text>BOTAAAAAO</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
