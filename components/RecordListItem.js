import React, {
  Component,
  Text,
  View,
} from 'react-native';

import styles from '../styles/Initial';

export default class RecordListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      record: this.props.record
    };
  }

  render() {
    const record = this.state.record;

    return(
      <View>
        <Text style={styles.leftColor}> </Text>
        <View style={styles.recordData}>
          <Text numberOfLines={1} style={styles.descriptionText}>{record.description}</Text>
          <Text style={styles.datetimeText}>{record.datetime}</Text>
        </View>
        <View style = {styles.price}>
          <Text style={styles.priceText}>{record.price.currency} {record.price.value}</Text>
        </View>
      </View>
    );
  }
}
