
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

var React = require('react-native');

var {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ListView,
    RecyclerViewBackedScrollView,
    NavigatorIOS,
    ScrollView
} = React;

import DemoSimpleList from './components/DemoSimpleList';
import iOSPlaceholderView from './components/iOSPlaceholderView';

//state, props
const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 },
                                 });


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
                component: iOSPlaceholderView,
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
