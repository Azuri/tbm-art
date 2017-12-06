import React from 'react';

import Form from './Form.jsx';
import TodoList from './TodoList.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <TodoList />
      </div>
    )
  }
}

export default App;