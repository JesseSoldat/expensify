import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const ExpensesSummary = () => {

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing
          <span></span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expenses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpensesSummary;