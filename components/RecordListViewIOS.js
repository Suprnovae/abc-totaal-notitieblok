import React, {
  Component,
  ListView,
  ScrollView,
  Text,
} from 'react-native';

import RecordListItem from './RecordListItem';
import styles from '../styles/Initial';

export default class RecordListViewIOS extends Component {

  render() {
    return(
      <ScrollView style={styles.list}>
        <ListView
          dataSource={this.props.dataSource}
          renderRow = {this.renderRecord}
          style = {styles.ListView}
        ></ListView>
      </ScrollView>
    );
  }

  renderRecord(dataSource) {
    return(
      <RecordListItem record={dataSource} />
    );
  }
}
