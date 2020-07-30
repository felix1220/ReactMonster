import React, { Component } from 'react';
import {connect} from 'react-redux';
import { incrementAsync, decrementAsync, dispatchUsersAsync  } from './testActions';

const mapStateToProps = (state) => ({
    data: state.test.data,
    loading: state.async.loading
});

const mapDispatchToProps = {
    incrementAsync,
    decrementAsync,
    dispatchUsersAsync
}

class TestComponent extends Component {
    render() {
        const { data, incrementAsync, decrementAsync, loading, dispatchUsersAsync } = this.props;
        return (
            <div>
                <h1>Test Component</h1>
                <h3>The answer is: {data}</h3>
                <div>
                    <button loading={loading} onClick={incrementAsync}>Increment</button> &nbsp;
                    <button loading={loading} onClick={decrementAsync }>Decrement</button> &nbsp;
                    <button onClick={dispatchUsersAsync}>Load Data </button>
                </div>
               
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);