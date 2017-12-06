import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <li onClick={this.props.onClick}
          style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>
          {this.props.text}
          <button onClick={(e) => {
            e.stopPropagation();
            this.props.onRemoveClick();
          }}> x </button>
      </li>
    );
  }
}

export default Todo;