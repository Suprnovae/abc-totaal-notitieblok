import React, {
  Component,
  ListView,
  ScrollView,
  Text,
  PropTypes,
} from 'react-native';

import styles from '../styles/Initial';
import results from '../data/results.json';
import SemiGaugeView from './SemiGaugeView';

// FIX: How do we get access to a store inside the components?
// Shouldn't use of Provider expose the store to all the components contained
// within the Provider or does it work differently for connected components?
const ResultViewIOS = (props, x, y, z) => {
  let ds = new ListView.DataSource({rowHasChanged: (a, b) => a !== b});

  //console.log(resultsDataSet.ManagementInformatie.WinAdm[0].Jaar);
  const renderer = (data, section, row, highlight) =>
    <SemiGaugeView result={data}/>
  return(
    <ScrollView style={styles.list}>
      <ListView
        dataSource={ds.cloneWithRows(results.data)}
        renderRow={renderer}
      />
    </ScrollView>
  );
}

export default ResultViewIOS;
