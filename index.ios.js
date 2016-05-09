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
  ScrollView,
  View
} from 'react-native';

import DemoSimpleList from './components/DemoSimpleList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Main extends Component {
	constructor(props) {
		super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(['morgan', 'barclays', 'rabo', 'roth', 'rocker', 'london', 'new york', 'carnegie', 'lehman', 'v/d bilt', 'chase', 'hartman', 'stilman'])
		}
	}
  render() {
    return (
      <ScrollView style={styles.list}>
				<DemoSimpleList dataSource={this.state.dataSource} />
      </ScrollView>
    );
  }
}

class Add extends Component {
  render() {
    return (
      <ScrollView style={styles.list}>
        <Text style={styles.welcome}>
          Add something here
        </Text>
      </ScrollView>
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
