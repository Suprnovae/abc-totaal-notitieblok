/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  ToolbarAndroid,
  View,
} from 'react-native';

import PlaceholderView from './components/PlaceholderView';
import styles from './styles/Initial';
const actions = [
  {title: 'Settings', icon: require('image!app_logo'), show: 'always'},
  {title: 'Boom', icon: require('image!app_logo'), show: 'always'},
];

class NotitieBlok extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <ToolbarAndroid
            style={{flex: 0, height: 56, backgroundColor: 'white'}}
            icon={require('image!toolbar_icon')}
            navIcon={require('image!toolbar_icon')}
            title='ABC Notitie Blok'
            actions={[]} />
          <PlaceholderView />
        </View>
    );
  }
}

AppRegistry.registerComponent('NotitieBlok', () => NotitieBlok);
