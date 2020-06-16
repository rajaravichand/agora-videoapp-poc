import {AppRegistry} from 'react-native';
import RouterComponent from './components/Router';
import {name as appName} from './app.json';

console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => RouterComponent);
