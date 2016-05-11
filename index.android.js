/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  ToolbarAndroid,
  ListView,
  ScrollView,
  Navigator,
  View,
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import RecordListViewAndroid from './components/RecordListViewAndroid';
import CameraViewAndroid from './components/CameraViewAndroid';
import styles from './styles/Initial';
import MockData from './data/records';

const actions = [
  {title: 'Settings', icon: require('image!app_logo'), show: 'always'},
  {title: 'Boom', icon: require('image!app_logo'), show: 'always'},
];

class NotitieBlok extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(MockData.records)
    };
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'ABC Notitie Blok', id:'home' ,index: 0}}
        renderScene={this.renderScene.bind(this)}
        ref="navigator"/>
    );
  }

  renderScene(route, navigator) {
    console.log('renderScene');
    _navigator = navigator;
    switch (route.id) {
    case 'home':
      return (
          <View style={{flex: 1}}>
            <ToolbarAndroid
              style={styles.toolbar}
              icon={require('image!toolbar_icon')}
              navIcon={require('image!toolbar_icon')}
              title='ABC Notitie Blok'
              actions={[]}/>
            <View style={styles.container}>
              <RecordListViewAndroid dataSource={this.state.dataSource}/>
            </View>
            <ActionButton buttonColor="#42A5F5">
              <ActionButton.Item buttonColor="#FFC107" title="New">
                <Icon name="rocket" size={30} style={{fontSize: 20, height: 22, color: 'white',}}/>
              </ActionButton.Item>
              <ActionButton.Item buttonColor='#1abc9c' title="camera" onPress={this._openCamera.bind(this)}>
                <Icon name="camera" size={30} style={{fontSize: 20, height: 22, color: 'white',}}/>
              </ActionButton.Item>
            </ActionButton>
          </View>
        );
    case 'camera':
      return (<CameraViewAndroid></CameraViewAndroid>);
    }
  }

  _openCamera() {
    //ToastAndroid.show('This is a toast with long duration', ToastAndroid.LONG);
    console.log("this is it");
    this.refs.navigator.push({
      title: 'camera',
      id: 'camera',
    });
    //return ( <CameraViewAndroid></CameraViewAndroid>);
  }

}

AppRegistry.registerComponent('NotitieBlok', () => NotitieBlok);
