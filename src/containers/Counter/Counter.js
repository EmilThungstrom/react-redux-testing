import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/reducers/actions/index";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={() => this.props.onAddCounter(1)} />
        <CounterControl label="Decrement" clicked={() => this.props.onSubCounter(1)} />
        <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)} />
        <CounterControl label="Subtract 5" clicked={() => this.props.onSubCounter(5)} />
        <hr />
        <button onClick={() => this.props.onStoreCounter(this.props.counter)}>STORE</button>
        <ul>
          {this.props.stored.map(el => (
            <li key={el.id} onClick={() => this.props.onDeleteValue(el.id)}>
              {el.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter.counter,
    stored: state.stored.stored
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddCounter: value => dispatch(actionCreators.addCounterValue(value)),
    onSubCounter: value => dispatch(actionCreators.subCounterValue(value)),
    onStoreCounter: value => dispatch(actionCreators.storeValue(value)),
    onDeleteValue: id => dispatch(actionCreators.deleteValue(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
