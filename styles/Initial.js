import React, {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    //height: 100,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#f3f3f3',
    //backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  toolbar: {
    height: 56,
    backgroundColor: '#2196F3',
    flex: 0,
  },
  list:{
    backgroundColor: 'white',
  },
  descriptionText : {
    fontSize: 15,
    //alignSelf: 'stretch',
    //backgroundColor: 'red',
    fontWeight: 'bold',
    margin:20,
    marginTop:-50,
    height:20,

  },
  leftColor: {
    backgroundColor:'orange',
    width:10,
    height: 70,
    position: 'relative',
  },
  recordData: {
    flex: 1,
    marginRight: 150,
  },
  datetimeText:{
    fontSize:10,
    margin:20,
    marginTop:-20,
  },

  price: {
    width:150,
    height:70,
    backgroundColor: '#CCCCCC',
    alignSelf: 'flex-end',
    marginTop:-71,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ListView: {
    padding:20,
    backgroundColor: '#F6F6F6',
    margin:-20
  },
  priceText: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal:10,
    textAlign: 'right',
  },
  priceblock: {
    backgroundColor: '#4A4A4A',
    height:150,
    flex: 1,
    flexDirection: 'row',
  },
  newrecordcurrency:{
    flex: 1,
    margin:10,
    marginTop: 48,
  },
  newrecordprice:{
    flex:1,
    justifyContent: 'center',
    margin:20
  },
  newrecordblock:{
    flex: 1,
    flexDirection: 'row',
    height:40,
    backgroundColor:'white'
  },
  newrecordleft:{
    flex:1,
    backgroundColor:'white',
    margin:10,
  },
  newrecordright:{
    flex:2.5,
    backgroundColor:'white',
  },
  categoryleft:{
    flex:0.3,
    backgroundColor:'white',
    marginTop:10,
    marginHorizontal:10
  },
  categoryright:{
    flex:2.5,
    backgroundColor:'white',
    marginTop:10,

  },
  newrecordicon:{
    flex:0.3,
    backgroundColor:'white',
    margin:10
  },
  text:{
    color:'#C0C0C0',
    marginTop:10,
    height: 40,  
    fontSize: 16
  },
  datepicker:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:60,
  }

});
