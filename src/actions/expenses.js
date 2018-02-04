import uuid from 'uuid';
import database from '../firebase/firebase';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// console.log(process.env.NODE_ENV);
let rootDatabase;

if(process.env.NODE_ENV === 'test') {
  rootDatabase = 'test';
} else if(process.env.NODE_ENV === 'production') {
  rootDatabase = 'production';
} else if (process.env.NODE_ENV === 'development') {
  rootDatabase = 'development';
}

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    //defaults
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref(`${rootDatabase}/expenses`).push(expense)
      .then(ref => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      });
  };
};

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
}); 