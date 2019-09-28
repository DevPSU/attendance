import React from 'react';
import { Image } from 'react-native;'
import { createAppContainer } from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";

import Welcome from '../screens/Welcome';
import Browse from '../screens/Browse';
import Explore from '../screens/Explore';
import Login from '../screens/Login';
import Product from '../screens/Product';
import Settings from '../screens/Settings';

import { theme } from '../constants';

const screens = createStackNavigator({
    Welcome,
    Login,
    Browse,
    Explore,
    Product,
    Settings,
}, {
    defaultNavigationOptions:{
        headerStyle: {},
        headerBackImage: <Image/>,
        headerBackTitle: null,
        headerLeftContainerStyle: {},
        headerRightContainerStyle: {},
    }
});

export default createAppContainer(screens);