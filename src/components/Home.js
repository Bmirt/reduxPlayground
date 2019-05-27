import React, { Component } from "react";

class Home extends Component {
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

export default Home;
