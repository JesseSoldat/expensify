import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expenses.id, expense);
    this.props.history.push('../dashboard');
  };

  onRemove = ()  => {
    this.props.removeExpense({id: this.props.expenses.id});
    this.props.history.push('../dashboard');  
  };
 
  render() {
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
  return ({
      expense: state.expenses.find(expense => {
        return expense.id === props.match.params.id;
      })
    }
  )
};

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);