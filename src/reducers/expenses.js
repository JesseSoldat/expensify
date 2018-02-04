import moment from 'moment';

const expensesReducerDefaultState = [
  {
    description: 'Internet', 
    id: '42432342343', 
    amount: 43545,
    note: 'February true move payment',
    createdAt:  moment().subtract(4, 'days').valueOf()
  },
  {
    description: 'Car Payments',
    id: '477772342343',
    amount: 773545,
    note: 'February car payment',    
    createdAt: moment().add(7, 'days').valueOf()
  },
  {
    description: 'Groceries', 
    id: '324324342343', 
    amount: 56543,
    note: 'February groceries',    
    createdAt:  moment().add(14, 'days').valueOf()
  },
  {
    description: 'Electric',
    id: '424323fds2343',
    amount: 1544545,
    note: 'February electricty payment',    
    createdAt:  moment().add(4, 'days').valueOf()
  }
];

export default (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      // console.log('ADD_EXPENSE', action);
      return [
        ...state,
        action.expense
      ];

    case 'REMOVE_EXPENSE':
      // console.log('REMOVE_EXPENSE');
        return state.filter(({id}) => id !== action.id);
      
    case 'EDIT_EXPENSE':
      // console.log('EDIT_EXPENSE', action);
      return state.map(expense => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });

    case 'SET_EXPENSES':
      console.log('SET_EXPENSES', action.expenses);   
      return action.expenses;
      
    default:
      return state;
  }
};