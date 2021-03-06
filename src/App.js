import React from 'react';

class App extends React.Component {
  state = {
    text: '',
    todos: [
      { id: 1, title: 'my 1st todo', completed: false },
      { id: 2, title: 'my 2nd todo', completed: false },
      { id: 3, title: 'my 3rd todo', completed: false },
    ]
  }

  handleChangeText = e => {
    const { value } = e.target    //grab value from e.target
    this.setState({
      text: value
    })
  }

  addToDo = () => {
    const { todos, text } = this.state
    this.setState({
      todos: [...todos, { id: todos.length + 1, title: text, completed: false }],
      text: ''
    })
  }

  deleteTodo = (id) => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter(todo => todo.id !== id) })

  }

  completedTask = (id) => {
    const { todos } = this.state;
    todos.map(todo => {
      if (todo.id === id) {
        todo.completed = true
      }
      return todo;
    })

    this.setState({ todos })
  }

  render() {
    return (
      <div className='App'>
        <h1>Hello World</h1>
        {/* <h3>{this.state.text}</h3> */}
        <input value={this.state.text} onChange={this.handleChangeText} />
        <button onClick={this.addToDo}>Add Text</button>
        {
          this.state.todos.map(todo => {
            return <div key={todo.id}>{todo.title}
              <div onClick={() => this.deleteTodo(todo.id)}>X</div>
              <div onClick={() => this.completedTask(todo.id)}>O</div>
              <hr />
            </div>
          })
        }
      </div >
    )
  }
}

export default App
