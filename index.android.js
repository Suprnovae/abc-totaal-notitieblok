/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  BackAndroid,
  Component,
  ToolbarAndroid,
  ListView,
  ScrollView,
  Navigator,
  View,
  Text,
  TextInput,
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
            <ActionButton.Item buttonColor="#FFC107" title="New" onPress={this._openForm.bind(this)}>
              <Icon name="rocket" size={30} style={{fontSize: 20, height: 22, color: 'white',}}/>
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="camera" onPress={this._openCamera.bind(this)}>
              <Icon name="camera" size={30} style={{fontSize: 20, height: 22, color: 'white',}}/>
            </ActionButton.Item>
          </ActionButton>
        </View>
      );
    case 'new':
      return (
        <View>
          <ToolbarAndroid
            style={styles.toolbar}
            navIcon={require('image!toolbar_icon')}
            title='New Record'
            actions={[]} />
          <View style={styles.container}>
            <Text>What?</Text>
            <TextInput
              keyboardType='numeric'
              defaultValue='0' />
            <TextInput
              placeholder='Enter description of entry...' />
          </View>
        </View>
      );
    case 'camera':
      return (<CameraViewAndroid navigator={navigator} route={route} {...this.props} ></CameraViewAndroid>);
    }
  }

  _openCamera() {
    console.log("opening camera view");
    this.refs.navigator.push({
      id: 'camera',
      title: 'camera',
    });
  }

  _openForm() {
    this.refs.navigator.push({
      id: 'new',
      title: 'New Record',
    });
  }
}

AppRegistry.registerComponent('NotitieBlok', () => NotitieBlok);
