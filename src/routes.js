import { createAppContainer } from 'react-navigation';
// eslint-disable-next-line import/no-unresolved
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    User,
  }),
);

export default Routes;
