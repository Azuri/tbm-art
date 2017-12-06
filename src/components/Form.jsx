import React from 'react';
import { connect } from 'react-redux';
import { add } from '../actions'

class AddTodo extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let input;

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.onSubmit(input.value);
        input.value = '';
        input.focus();
      }}>
        <input type="text" autoFocus ref={(node) => {
          input = node;
        }}/>
        <button type="submit">
          Add
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => {
      text = text.trim();
      if (!text) {
        return;
      }
      dispatch(add(text));
    }
  };
}

const Form = connect(null, mapDispatchToProps)(AddTodo);

export default Form;