import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';
import axios from 'axios'


class App extends Component {

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => console.log(response))
    }

    render() {
        const { CounterActions, number } = this.props;


        return (
            <div>
                <h1>{number}</h1>
                <button onClick={CounterActions.incrementAsync}>+</button>
                <button onClick={CounterActions.decrementAsync}>-</button>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        number: state.counter
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch)
    })
)(App);