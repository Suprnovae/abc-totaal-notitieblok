/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet,
  Text,
  ListView,
} from 'react-native';

import CameraViewIOS from './components/CameraViewIOS';
import RecordListViewIOS from './components/RecordListViewIOS';
import styles from './styles/Initial';
import MockData from './data/records';

class Main extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(MockData.records)
    }
  }

  render() {
    return (
      <RecordListViewIOS dataSource={this.state.dataSource} />
    );
  }
}

class NotitieBlok extends Component {
  rightButtonPress() {
      this.refs.nav.navigator.push({
          title: "Camera",
          component: CameraViewIOS,
          rightButtonTitle: 'Cancel',
          onRightButtonPress: () => {
              this.refs.nav.navigator.pop();
          }
      });
  }

  render() {
    return (
      <NavigatorIOS
        ref="nav"
        style={styles.container}
        initialRoute={{
          component: Main,
          title: 'Boekingen',
          leftButtonIcon: require('image!NavBarButtonIcon'),
          rightButtonIcon: require('image!NavBarButtonPlus'),
          onLeftButtonPress: () => {console.log('pressed')},
          onRightButtonPress:this.rightButtonPress.bind(this)
        }}
        itemWrapperStyle={styles.ItemWrapper}
        tintColor="#FFF"
        barTintColor = '#2196F3'
        titleTextColor = "#FFF"
      />
    );
  }
}

AppRegistry.registerComponent('NotitieBlok', () => NotitieBlok);
