import React, {Component} from 'react';
import {View, Text} from 'react-native';

class cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <View>
        <Text> cart </Text>
      </View>
    );
  }
}

export default cart;
