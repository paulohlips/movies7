import { StyleSheet } from 'react-native';

import { colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  content: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingTop: 12,
    width: '100%'
  },

  image: {
    width: 150,
    height: 190,
    paddingTop: 10,
  },

  vote: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 10,
    paddingTop: 15,
    paddingHorizontal: 8,
  },

  title: {
    fontSize: 22,
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  text: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
    paddingHorizontal: 6,
    paddingTop: 10,
  },

  maisFilmes: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 12,
    paddingHorizontal: 6,
  },

  textTitle: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 14,
    lineHeight: 30,
    paddingHorizontal: 15,
  },
});

export default styles;
