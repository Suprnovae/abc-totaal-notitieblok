import React, {
  Component,
  ListView,
  ScrollView,
  Text,
} from 'react-native';

import RecordListItem from './RecordListItem';
import styles from '../styles/Initial';

export default (props) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  const renderRecord = (r) => {
    return (
      <RecordListItem record={r} />
    );
  };
  return(
    <ScrollView style={styles.list}>
      <ListView
        dataSource={ds.cloneWithRows(props.records)}
        renderRow = {renderRecord}
        style = {styles.ListView}
      ></ListView>
    </ScrollView>
  );
};
