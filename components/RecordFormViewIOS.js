import React, {
  Component,
  ToolbarAndroid,
  View,
  ScrollView,
  TextInput,
  Text
} from 'react-native';

import styles from '../styles/Initial';

export default class RecordFormViewIOS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.props.records,
      nav: this.props.navigator,
    };
  }

  render() {
    return(
        <ScrollView style={styles.list}>
          <View style={[styles.container]} >
          <View style={styles.priceblock}>
          <View style={styles.newrecordcurrency}>
            <TextInput
              style={{height:70, fontSize: 32, fontWeight: 'bold', color:'#2196F3', textAlign:'left'}}
              defaultValue='USD' />
              </View>
           <View style={styles.newrecordprice}>
              <TextInput
              style={{height:90, fontSize: 54, fontWeight: 'bold', color:'#2196F3',textAlign:'right'}}
              keyboardType='numeric'
              defaultValue='12.00' />
               </View>
              </View>

           <View style={styles.newrecordblock}>
           <View style={styles.newrecordleft}>
           <Text style={{height: 40,  fontSize: 16,}}>Description</Text>
           </View>
           <View style={styles.newrecordright}>
            <TextInput
              style={{height: 40}}
              placeholder='Enter description of record...' />
              </View>
              </View>

            <View style={styles.newrecordblock}>
           <View style={styles.newrecordleft}>
           <Text style={{height: 40,  fontSize: 16,}}>On</Text>
           </View>
           <View style={styles.newrecordright}>
            <TextInput
              style={{height: 40}}
              placeholder='May 13, 2016   1:00 PM' />
              </View>
              </View>

              <View style={styles.newrecordblock}>
           <View style={styles.categoryleft}>
           <Text style={{height: 40,  fontSize: 16,}}>Dot</Text>
           </View>
           <View style={styles.categoryright}>
           <Text style={{height: 40,  fontSize: 16,}}>Uncategorized</Text>
              </View>
              <View style={styles.newrecordicon}>
           <Text style={{height: 40,  fontSize: 16,}}>icon</Text>
              </View>
              </View>

              <View style={styles.newrecordblock}>
           <View style={styles.categoryleft}>
           <Text style={{height: 40,  fontSize: 16}}>icon</Text>
           </View>
           <View style={styles.categoryright}>
            <Text style={{height: 40,  fontSize: 16}}>Add Scan</Text>
              </View>
              </View>
          </View>
          
          </ScrollView>
        );
  }

}
