import React from 'react';

class App extends React.Component {
  state = {
    todos: [
      { id: 1, title: 'my 1st todo', completed: false },
      { id: 2, title: 'my 2nd todo', completed: false },
      { id: 3, title: 'my 3rd todo', completed: false },
    ]
  }

  render() {
    return (
      <div className='App'>
        <h1>Hello World</h1>
        {
          this.state.todos.map(todo => {
            return <div key={todo.id}>{todo.title}</div>
          })
        }
      </div >
    )
  }
}

export default App
