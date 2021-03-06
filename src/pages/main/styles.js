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
    width: 220,
  },

  scrollView: {
    paddingTop: 50,
  },

  scrollTitle: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 10,
  },

  renderMovie: {
    alignItems: 'center',
    paddingHorizontal: 5,
    elevation: 3,
  },

  image: {
    width: 150,
    height: 190,
  },

  imageDestaque: {
    width: 160,
    height: 210,
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
    paddingHorizontal: 6,
  },

  text: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 20,
    paddingHorizontal: 6,
    paddingTop: 10,
  },

  maisFilmes: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 14,
    paddingHorizontal: 6,
    paddingVertical: 10,
  },

  textTitle: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 6,
  },
});

export default styles;
