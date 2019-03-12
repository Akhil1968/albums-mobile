import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import CounterControl from './CounterControl';
import CounterOutput from './CounterOutput';
import {incrementCounterAction, decrementCounterAction} from '../actions/CounterActions';

class Counter extends Component {
    
    render () {
        return (
            <View style={styles.panelStyle}>
                <CounterControl 
                    label="+" 
                    clicked={this.props.incrementCounterAction} />
                <CounterOutput value={this.props.ctr} />
                <CounterControl 
                    label="-" 
                    clicked={this.props.decrementCounterAction}  />
            </View>
        );
    }
}


const mapSTP = state => {
    return {
        ctr: state.ctr.counter
    }
}

const mapDTP =  {
    incrementCounterAction: incrementCounterAction,
    decrementCounterAction: decrementCounterAction
}

const styles = StyleSheet.create({
    panelStyle:{ 
        flexDirection: 'row',
        backgroundColor: 'white', 
        flex: 1, 
        height: 50, 
        paddingTop: 100
    }
});

export default connect(mapSTP, mapDTP)(Counter);