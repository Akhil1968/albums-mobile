import React from 'react';
import {StyleSheet, Text} from 'react-native';


const counterOutput = (props) => (
    <Text style={styles.titleText} >Counter: {props.value}</Text>
);

const styles = StyleSheet.create({
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

export default counterOutput;