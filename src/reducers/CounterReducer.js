
const initialState = {
    counter: 500
}

const CounterReducer = (state = initialState, action) => {
    if (action.type === "INCREMENT"){
        return {counter: state.counter + 10}
    }
    if (action.type === "DECREMENT"){
        return {counter: state.counter - 10}
    }
    return state;
};

export default CounterReducer;