import React, {
  Component,
  ToolbarAndroid,
  View,
  Text,
  TextInput,
} from 'react-native';

import styles from '../styles/Initial';

export default class NewViewAndroid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.props.records,
      nav: this.props.navigator,
    };
  }

  render() {
    return(
        <View>
          <ToolbarAndroid
            style={styles.toolbar}
            navIcon={require('image!toolbar_icon')}
            title='New Record'
            actions={[]} />
          <View style={styles.container}>
            <Text>What?</Text>
            <TextInput
              keyboardType='numeric'
              defaultValue='0' />
            <TextInput
              placeholder='Enter description of entry...' />
          </View>
        </View>
        );
  }

}
