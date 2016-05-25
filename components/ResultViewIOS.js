import React, {
  Component,
  ListView,
  ScrollView,
  Text,
  PropTypes,
} from 'react-native';

import styles from '../styles/Gauge';
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
  // Use pagingEnabled prop on ScrollView to control horizontal scroll
  return(
    <ScrollView style={styles.list}
      bounces={true}
      indicatorStyle={'white'} >
      <ListView
        dataSource={ds.cloneWithRows(results.data)}
        renderRow={renderer}
      />
    </ScrollView>
  );
}

export default ResultViewIOS;
