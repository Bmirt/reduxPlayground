import React, { Component } from "react";
import { connect } from "react-redux";
import { changeTitle } from "./actions/Actions";

import "./App.css";

class App extends Component {
  changeTitleFunction = id => {
    let newTitle = prompt("please put new title");
    let ourObject = this.props.todos.find(todo => {
      return todo.id === id;
    });
    ourObject.title = newTitle;

    const index = this.props.todos.findIndex(todo => todo.id === id);
    let payload = {
      ourObject,
      index
    };
    this.props.changeTitle(payload);
  };
  render() {
    console.log(this.props.todos);
    const todos = this.props.todos.map(todo => {
      return (
        <div key={todo.id} onClick={() => this.changeTitleFunction(todo.id)}>
          {todo.title}
        </div>
      );
    });
    return <div>{todos}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return state;
};
const mapDispatchToProps = dispatch => ({
  changeTitle: payload => dispatch(changeTitle(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
