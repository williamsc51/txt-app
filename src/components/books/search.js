import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.search}>
        <View style={styles.searchBox}>
          <TextInput placeholder="Search" placeholderTextColor="#c4c4c4" />
        </View>
        <View style={styles.searchButton}>
          <Ionicons name="search" size={18} color="#ffffff" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    flex: 1,
    flexDirection: 'row',
  },
  searchBox: {
    flexGrow: 10,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderRightWidth: 0,
  },
  searchButton: {
    flexGrow: 1,
    backgroundColor: '#cccccc',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default search;
