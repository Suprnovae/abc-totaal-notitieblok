import React, {
  Component,
  ListView,
  Text,
  View,
} from 'react-native';

import RecordListItem from './RecordListItem';
import styles from '../styles/Initial';

export default class DemoSimpleList extends Component {

  render() {
    return(
      <ListView
        dataSource={this.props.dataSource}
        renderRow = {this.renderRecord}
        style = {styles.ListView}
      ></ListView>
    );
  }

  renderRecord(dataSource) {
    return(
      <RecordListItem record={dataSource} />
    );
  }
}
