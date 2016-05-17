import React, {
  Component,
  ToolbarAndroid,
  View,
  ScrollView,
  TextInput,
  Text,
  DatePickerIOS,
  NavigatorIOS,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

var moment = require('moment');

import styles from '../styles/Initial';
import CameraViewIOS from '../components/CameraViewIOS';

export default class RecordFormViewIOS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.props.records,
      nav: this.props.navigator,
      date: new Date(),
      showDatePicker: false,
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60
    };
  }

  render() {     
    var showDatePicker = this.state.showDatePicker ?
            <DatePickerIOS
                okText='Ok'
                dismissText='Dismiss'
                date={this.state.date}
                onDateChange={this.onDateChange.bind(this)}
                timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                mode="datetime"/> : <View /> ;      
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
            <TouchableOpacity style={{height: 40}}
                 onPress={() => this.setState({showDatePicker: !this.state.showDatePicker})}>
            <Text style={styles.text}>{moment(this.state.date).format('LLL')}</Text>
            </TouchableOpacity>
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
           <TouchableHighlight onPress={this.openCamera.bind(this)}>
           
            <Text style={{height: 40,  fontSize: 16}}>Add Scan</Text>
          
            </TouchableHighlight>
              </View>
              </View>

          </View>
          <View style={styles.datepicker}>
          {showDatePicker}
          </View>
          </ScrollView>

        );
  }

  onDateChange(date) {
    this.setState({date: date});
  };

  openCamera() {
    this.props.navigator.push({
      title: "Camera",
      component: CameraViewIOS,
      rightButtonTitle: 'Cancel',
      onClick: () => {
        this.props.navigator.pop();
      }
    });
  }

}


