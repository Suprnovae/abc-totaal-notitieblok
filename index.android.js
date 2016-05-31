/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  BackAndroid,
  Component,
  ListView,
  ScrollView,
  Navigator,
  View,
  Text,
  TextInput,
} from 'react-native';

import CameraViewAndroid from './components/CameraViewAndroid';
import HomeViewAndroid from './components/HomeViewAndroid';
import RecordFormViewAndroid from './components/RecordFormViewAndroid';
import styles from './styles/Initial';
import MockData from './data/records';

import LoginANDROID from './components/LoginANDROID';

const actions = [
  {title: 'Settings', icon: require('image!app_logo'), show: 'always'},
  {title: 'Boom', icon: require('image!app_logo'), show: 'always'},
];

class NotitieBlok extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(MockData.records),
      colorProps: {
        titleColor: 'red'
      }
    };
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'ABC Notitie Blok', id:'home' ,index: 0}}
        renderScene={this.renderScene.bind(this)}
        configureScene={route => (
          route.sceneConfig || Navigator.SceneConfigs.HorizontalSwipeJump
        )}
        ref="navigator"/>
    );
  }

  renderScene(route, navigator) {
    BackAndroid.addEventListener('hardwareBackPress', function() {
      if(navigator && navigator.getCurrentRoutes().length > 1) {
        console.log(navigator.getCurrentRoutes());
        navigator.pop();
        return true;
      }
      return false;
    });

    switch (route.id) {
    case 'home':
      return(
        <HomeViewAndroid
          navigator={navigator}
          records={this.state.dataSource} />
      );
    case 'new':
      return (
        <RecordFormViewAndroid
          navigator={navigator} />
      );
    case 'camera':
      return (
        <CameraViewAndroid
          navigator={navigator}
          route={route} {...this.props} />
      );
    case 'login':
      return (
        <LoginANDROID
          navigator={navigator}
          route={route} {...this.props} />
      );
    }
  }
}

AppRegistry.registerComponent('NotitieBlok', () => NotitieBlok);
