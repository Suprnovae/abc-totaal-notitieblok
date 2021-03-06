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
  records: [], //MockData.records
};

const store = createStore(basicApp, initialState);
let unsubscribe = store.subscribe(() => {
  console.log("state changed to", store.getState());
});

class NotitieBlok extends Component {
  rightButtonPress() {
    var titles = [
      'something happening',
      'talk to the President',
      'something something darkside',
      'make some music',
      'share some love',
      'give a stranger a hug',
      'send mom flowers',
    ];
    var price = Math.floor(Math.random()*200);
    var title = titles[Math.floor(Math.random()*titles.length)]

    store.dispatch(addRecord(price, 'XTS', title));
    return;
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
    console.log("NotitieBlok");
    // FIX: Figure out why rowHasChanged is never fired. Somehow we append the
    // dataset and perform the cloneWithRows inside components/RecordListViewIOS
    // but the rowHasChanged check is never executed.
    let ds = new ListView.DataSource({rowHasChanged: function (r1, r2) {
      console.log("rowHasChanged", r1, r2);
      return true; //(r1 !== r2);
    }});
    return (
      <Provider store={store}>
        <NavigatorIOS
          ref="nav"
          style={styles.container}
          initialRoute={{
            component: RecordListIOS,
            passProps: { ds: ds },
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
