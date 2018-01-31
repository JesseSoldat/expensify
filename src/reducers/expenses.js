const expensesReducerDefaultState = [
  {
    description: 'Internet', 
    id: '42432342343', 
    amount: 43545,
    createAt: 43
  },
  {
    description: 'Electric',
    id: '424323fds2343',
    amount: 1545,
    createAt: 3443
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
    default:
      return state;
  }
};