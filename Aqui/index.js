/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Launch from './src/components/Launch.js'
import {name as appName} from './app.json';
import Login from './src/components/Login.js';


AppRegistry.registerComponent(appName, () => Login);


