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
  return(
    <View style={styles.resultentrywithdial}>
      <DialView initial={0} level={30}/>
      <View style={styles.resultdata}>
        <Text>€ {props.result.Realisatie} gerealiseerd van € {props.result.Prognose}</Text>
        <View style={styles.tags}>
          <Text style={[{backgroundColor: 'rgb(90, 200, 250)'}, styles.tag]}>maand {props.result.Maandnr}</Text>
          <Text style={[{backgroundColor: 'rgb(255, 204, 0)'}, styles.tag]}>{props.result.Functie}</Text>
        </View>
      </View>
    </View>
  );
}

export default ResultListItemViewIOS;
