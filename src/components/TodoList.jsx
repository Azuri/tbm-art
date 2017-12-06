import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo.jsx';

import { connect } from 'react-redux';
import { toggle, remove } from '../actions/index';

class List extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.toArray().map((todo, index) => {
          return (
            <Todo key={index} {...todo} onClick={() => { 
              this.props.onTodoClick(index);
            }} onRemoveClick={() => {
              this.props.onRemoveClick(index);
            }} />
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (index) => {
      dispatch(toggle(index));
    },
    onRemoveClick: (index) => {
      dispatch(remove(index));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

