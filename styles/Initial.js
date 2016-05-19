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
    backgroundColor: '#FFFFFF',
  },
  descriptionText : {
    fontSize: 15,
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
  priceblockAndroid: {
    backgroundColor: '#4A4A4A',
    height:168,
    flex: 1,
    flexDirection: 'row',
  },
  newrecordcurrency:{
    flex: 1,
    margin:10,
    marginTop: 48,
  },
  newrecordcurrencyAndroid:{
    flex: 1,
    margin:10,
    marginTop: 58,
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
    backgroundColor:'#FFFFFF'
  },
  newrecordblockAndroid:{
    flex: 1,
    flexDirection: 'row',
    height:50,
    backgroundColor:'#FFFFFF',
    borderTopColor: '#C0C0C0', 
    borderTopWidth: 1,
  },
  newrecordleft:{
    flex:1,
    backgroundColor:'#FFFFFF',
    margin:10,
  },
  newrecordright:{
    flex:2.5,
    backgroundColor:'#FFFFFF',
  },
  descriptionAndroid:{
    flex:1,
    margin:10,
    justifyContent: 'center',
  },
  categoryleft:{
    flex:0.3,
    backgroundColor:'#FFFFFF',
    //marginTop:10,
    //marginHorizontal:5,
    padding:5,
  },
  categoryright:{
    flex:2.5,
    backgroundColor:'#FFFFFF',
    marginTop:10,
    textAlign:'left'

  },
  newrecordicon:{
    flex:0.3,
    backgroundColor:'#FFFFFF',
    margin:10
  },
  timepicker:{
    flex:0.7,
    marginTop:10,
    marginHorizontal:10,
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
    height:220,
    backgroundColor:'white'
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  circle:{
    width: 10,
    height: 10,
    borderRadius: 10/2,
    backgroundColor: '#DCDCDC',
    margin:5,
    marginTop:10
  },
  addIcon:{
    height:20, 
    width:20, 
    borderRadius: 20/2,
    backgroundColor: '#00FF00',
    marginBottom:40
  }
});
