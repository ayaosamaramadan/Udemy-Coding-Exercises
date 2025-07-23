import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = () => {
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label htmlFor="year-filter">Filter by year</label>
        <select id="year-filter">
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
      <div className='expenses-filter__control'>
        <label htmlFor="date-filter">Filter by date</label>
        <input type="date" id="date-filter" />
      </div>
    </div>
  );
};

export default ExpensesFilter;