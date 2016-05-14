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
import RecordFormViewIOS from './components/RecordFormViewIOS';
import RecordListViewIOS from './components/RecordListViewIOS';
import RecordListIOS from './containers/RecordListIOS';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { addRecord } from './actions';
import basicApp from './reducers';
import styles from './styles/Initial';
import MockData from './data/records';

const initialState = {
  token: 'YouReallyDidntExpectMeToHardcodeThatOrDidYou?',
  records: MockData.records
};

const store = createStore(basicApp, initialState);

const Main = (props) => {
  return (
    <RecordListIOS />
  );
}

class NotitieBlok extends Component {
  rightButtonPress() {
    store.dispatch(addRecord(100, 'XTS', 'Autogen'));
    //store.dispatch(
      this.refs.nav.navigator.push({
          title: "New Record", // "Camera",
          component: RecordFormViewIOS, //CameraViewIOS,
          rightButtonTitle: 'Cancel',
          onRightButtonPress: () => {
              this.refs.nav.navigator.pop();
          }
      });
  }

  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

AppRegistry.registerComponent('NotitieBlok', () => NotitieBlok);
