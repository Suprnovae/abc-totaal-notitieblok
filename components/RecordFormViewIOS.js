import React, {
  Component,
  ToolbarAndroid,
  View,
  ScrollView,
  TextInput,
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
            <TextInput
              style={{height: 40}}
              keyboardType='numeric'
              defaultValue='0' />
            <TextInput
              style={{height: 40}}
              placeholder='Enter description of entry...' />
          </View>
          </ScrollView>
        );
  }

}
