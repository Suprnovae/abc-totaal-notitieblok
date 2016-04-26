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

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

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
            style={styles.toolbar}
            icon={require('image!toolbar_icon')}
            navIcon={require('image!toolbar_icon')}
            title='ABC Notitie Blok'
            actions={[]} />
          <PlaceholderView />
        <ActionButton buttonColor="#42A5F5">
          <ActionButton.Item buttonColor="#FFC107" title="New">
            <Icon name="android-done-all" style={{fontSize: 20, height: 22, color: 'white',}} />
          </ActionButton.Item>
        </ActionButton>
        </View>
    );
  }
}

AppRegistry.registerComponent('NotitieBlok', () => NotitieBlok);
