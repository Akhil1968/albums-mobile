import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


const counterControl = (props) => (
    <TouchableOpacity  
        onPress={props.clicked}
        style={styles.buttonStyle}>
        <Text style={styles.buttonText}> 
            {props.label} 
        </Text>
    </TouchableOpacity>
);
const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: "column",
        flex: 1,
        alignSelf: 'stretch',
        height: 50,
        backgroundColor: '#007aff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        flex: 1,
        color: '#000',
        fontSize: 40,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingRight: 10,
      }
  });

export default counterControl;