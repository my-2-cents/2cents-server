import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='First Name'
        />
        <TextInput
          style={styles.input}
          placeholder='Last Name'
        />
        <TextInput
          style={styles.input}
          placeholder='Email Address'
        />
        <TouchableHighlight
          style={styles.button}
          placeholder='Next'
        />
    )
  }
  const styles = StyleSheet.create({
  container: {
    height: 600,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  input: {
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'burlywood',
    borderWidth: 1
  },
  button: {
    height: 40,
    width: 100,
    borderColor: 'burlywood',
    color: '#F7A213',
  }
  })

}

module.exports = Login;
