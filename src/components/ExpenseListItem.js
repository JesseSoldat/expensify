import React from 'react';
import { Link } from 'react-router-dom';

const ExpensesListItem = ({id, description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">
        {description}
      </h3>
      <span className="list-item__sub-title">
        {createdAt}
      </span>
    </div>
    <h3 className="list-item__data">
      {amount}
    </h3>
  </Link>
);

export default ExpensesListItem;