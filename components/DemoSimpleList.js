import React, {
  Component,
  ListView,
  Text,
  View,
} from 'react-native';

import styles from '../styles/Initial';

export default class DemoCardList extends Component {
  render () {
    
    return(
      <ListView
        dataSource={this.props.dataSource}
        renderRow = {this.renderRecord}
        // renderRow={(rowData) => <Text style = {styles.descriptionText}>{rowData.description}</Text>}
         renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
        style = {styles.ListView}
        ></ListView>
    );
  }
  renderRecord (dataSource) {
    var maxlimit = 15;
    return(
          <View>
           <Text style = {styles.leftColor}> </Text>
           <Text style = {styles.descriptionText}> {((dataSource.description).length > maxlimit) ? 
    (((dataSource.description).substring(0,maxlimit-3)) + '...') : 
    dataSource.description }
           </Text>
           <Text style = {styles.datetimeText}>{dataSource.datetime}
           </Text>
           <View style = {styles.price}>
           <Text style = {styles.text}>${dataSource.price}
           </Text>
           </View>
          </View>
);
  }
}
