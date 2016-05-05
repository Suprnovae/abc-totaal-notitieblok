/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

var React = require('react-native');

var _     = require('lodash');

var Records = require('./data/records.js');

//debugger;

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
ListView,
} = React;


//state, props
var NotitieBlok  = React.createClass({
                                     
                                     getInitialState: function(){
                                     return {
                                     dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
                                     }
                                     },
                                     
    
                                     componentDidMount: function(){
                                     this.setState({
                                                   dataSource: this.state.dataSource.cloneWithRows(Records.records),
                                     });
                                                                  },
    render: function() {
                                     //debugger;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
                                     });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NotitieBlok', () => NotitieBlok);
