import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends Component {
  onSubmit = (expense) => {

  };

  onRemove = ()  => {

  };

  render() {
    console.log(this.props);
    
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            onSubmit={this.onSubmit}
            expense={this.props.expense}
          />
          <button className="button button--secondary"
            onClick={this.onRemove}>
            Remove Expense
          </button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  console.log(state);
  
  return (
    {
      expense: state.expenses.find(expense => {
        return expense.id === props.match.params.id;
      })
    }
  )
}



export default connect(mapStateToProps)(EditExpensePage);