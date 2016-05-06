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
    backgroundColor: 'white',
    flex: 0,
  },
  list:{
    backgroundColor: 'white',
  },
  descriptionText : {
    fontSize: 15,
    fontWeight: 'bold',
    margin:20,
    marginTop:-50,
    width:120,
    height:20,
  },
  leftColor : {
    backgroundColor:'orange',
    width:10,
    height: 70,
    position: 'relative',
  },
  datetimeText:{
    fontSize:10,
    margin:20,
    marginTop:-20,
  },

  price: {
    width:75,
    height:70,
    backgroundColor: '#CCCCCC',
    marginLeft:260,
    marginTop:-71,
  },
  ListView: {
    padding:20,
    backgroundColor: '#F6F6F6',
    margin:-20
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal:10,
    marginVertical:25,
  },
});
