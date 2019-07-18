import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Favorites from './pages/favorites';
import { colors } from './styles';

const Route = createStackNavigator(
{
    Main: { screen: Main},
    Favorites: {screen: Favorites},
},
{
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.primaryDark,
        },
        headerTintColor: colors.white,
        headerBackTitle: null
    },
}
);

const Routes = createAppContainer(Route);

export default Routes;
