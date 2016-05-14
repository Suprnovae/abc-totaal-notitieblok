import React, {
  Component,
  ListView,
  ScrollView,
  Text,
} from 'react-native';

import RecordListItem from './RecordListItem';
import styles from '../styles/Initial';

export default (props) => {
  //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  let ds = new ListView.DataSource({rowHasChanged: function (r1, r2) {
    return true; //(r1 !== r2);
  }});
  const renderRecord = (rowData, sectionID, rowID, highlightRow) => {
    return (
      <RecordListItem record={rowData} />
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
