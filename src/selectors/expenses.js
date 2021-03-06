import moment from 'moment';

export default (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter(expense => {
    const createdAtMoment = moment(expense.createdAt);
    // console.log(createdAtMoment);
    // console.log(startDate);
    // console.log(endDate);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    // console.log(startDateMatch);
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    // console.log(endDateMatch); 
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;

  }).sort((a, b) => {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  })
}