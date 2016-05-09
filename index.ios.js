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
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: Main,
          title: 'Boekingen',
          leftButtonIcon: require('image!NavBarButtonIcon'),
          rightButtonIcon: require('image!NavBarButtonPlus'),
          onLeftButtonPress: () => {console.log('pressed')},
        }}
        itemWrapperStyle={styles.itemWrapper}
      />
    );
  }
}

AppRegistry.registerComponent('NotitieBlok', () => NotitieBlok);
