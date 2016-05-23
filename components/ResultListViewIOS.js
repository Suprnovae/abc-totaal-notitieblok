import React, {
  Component,
  ListView,
  ScrollView,
  Text,
  PropTypes,
} from 'react-native';

import styles from '../styles/Initial';
import resultsDataSet from '../data/resultaten.json';
import ResultListItem from './ResultListItem';

// FIX: How do we get access to a store inside the components?
// Shouldn't use of Provider expose the store to all the components contained
// within the Provider or does it work differently for connected components?
const ResultListViewIOS = (props, x, y, z) => {
  let ds = new ListView.DataSource({rowHasChanged: (a, b) => a !== b});


  //console.log(resultsDataSet.ManagementInformatie.WinAdm[0].Jaar);
  let results = resultsDataSet.ManagementInformatie.WinAdm.filter((x, i) => i < 20); //resultsDataSet.ManagementInformatie.WinAdm
  const renderer = (data, section, row, highlight) =>
    <ResultListItem result={data}/>
  return(
    <ScrollView style={styles.list}>
      <ListView
        dataSource={ds.cloneWithRows(results)}
        renderRow={renderer}
      />
    </ScrollView>
  );
}

export default ResultListViewIOS;
