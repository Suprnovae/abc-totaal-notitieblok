import React, {
  Component,
  ListView,
  ScrollView,
  Text,
  View,
  PropTypes,
} from 'react-native';

import DialView from './DialView';
import styles from '../styles/Initial';

// FIX: How do we get access to a store inside the components?
// Shouldn't use of Provider expose the store to all the components contained
// within the Provider or does it work differently for connected components?
const ResultListItemViewIOS = (props, ...x) => {
  //console.log('props', props, 'x', x);
  let result = props.result;
  let maxLevel = 101;
  let [prognose, realisatie] = [parseFloat(result.Prognose), parseFloat(result.Realisatie)];
  let level = prognose > 0 ? (realisatie/prognose)*100%maxLevel+1 : 0;
  console.log('level is', level);
  return(
    <View style={styles.resultentrywithdial}>
      <DialView initial={0} level={level}/>
      <View style={styles.resultdata}>
        <Text>€ {result.Realisatie} gerealiseerd van € {result.Prognose}</Text>
        <View style={styles.tags}>
          <Text style={[{backgroundColor: 'rgb(90, 200, 250)'}, styles.tag]}>maand {result.Maandnr}</Text>
          <Text style={[{backgroundColor: 'rgb(255, 204, 0)'}, styles.tag]}>{result.Functie}</Text>
        </View>
      </View>
    </View>
  );
}

export default ResultListItemViewIOS;
