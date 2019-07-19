import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Details from './pages/details';
import { colors } from './styles';

const Route = createStackNavigator(
  { Main: { screen: Main }, Details: { screen: Details } },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryDark,
      },
      backgroundColor: colors.primary,
    },
  }
);

const Routes = createAppContainer(Route);

export default Routes;
