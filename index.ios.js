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
    RecyclerViewBackedScrollView,
} = React;


//state, props
var export default class BasicRecordListElement extends Component({
//var NotitieBlok  = React.createClass({
                                     
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
            
            <ListView
            dataSource = {this.state.dataSource}
            renderRow = {this.renderRecord}
            renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
            renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
            style = {styles.ListView}
            ></ListView>
            
//      <View style={styles.container}>
//        <Text style={styles.welcome}>
//          Welcome to React Native!
//        </Text>
//      </View>
    );
  },
                                     
                                     renderRecord: function(record){
                                     return(
                                     <View>
                                            
                                            <Text style = {styles.leftColor}>
                                            </Text>
                                            <Text style = {styles.descriptionText}>{record.description}
                                            </Text>
                                            
                                            
                                            <Text style = {styles.datetimeText}>{record.datetime}
                                            </Text>
                                            
                                    
                                     
                                            <View style = {styles.price}>
                                            <Text style = {styles.text}>{record.price.currency}{record.price.value}
                                           
                                            
                                     </Text>
                                            </View>
                                     </View>
                                            );
                                     }
                                     });

const styles = StyleSheet.create({
  container: {
    flex: 1,
 flexDirection: 'row',
                                 
//    justifyContent: 'center',
//    alignItems: 'center',
    //backgroundColor: 'black',
  },
                                 row: {
                                 //flexDirection: 'row',
                                // justifyContent: 'center',
                                 padding: 10,
                                 height:70,
                                 backgroundColor: 'black',
                                 },
                                 
                                 descriptionText : {
                                 color: 'black',
                                 //backgroundColor:'red',
                                 margin:20,
                                 marginTop:-50,
                                 width:120,
                                 height:20,
                                 
                                 
                                 fontSize: 15,
                                 fontWeight: 'bold',
                                 
                                 },
                                 
                                 descriptionBlock:{
                                 
                                 width:100,
                                 height:50,
                                 
                                 
                                
                                
                                 
                                 },
                                 
                                 
                                 datetimeText : {
                                 color: 'black',
                                 
                                 fontSize: 10,
                                 margin:20,
                                 marginTop:-20,
                                 },
                                 
                                 separator: {
                                 height: 1,
                                 backgroundColor: '#CCCCCC',
                                 
                                 },
                                 
                                 leftColor : {
                                 backgroundColor:'orange',
                                 width:15,
                                 height: 70,
                                 position: 'relative',

                                 },
                                 
                                 price: {

                                 width:75,
                                 height:70,
                                 backgroundColor: '#CCCCCC',
                                 //marginLeft:250,
                                 marginTop:-71,
                                 marginRight: 30,
                                 right:-260,
                                

                                 },
                                 
                                
                                 text: {
                                 fontSize: 17,
                                 fontWeight: 'bold',
                                 marginHorizontal:5,
                                 marginVertical:25,
                                 
                                 
                                 },
                                 
                                 
                                 ListView: {
                                 padding: 20,
                                 
                                 backgroundColor: '#F6F6F6',

                                 },

   
});

AppRegistry.registerComponent('NotitieBlok', () => NotitieBlok);
