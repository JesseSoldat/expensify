import React, {Component} from 'react';
import moment from 'moment';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: '',
      note: '',
      createAt: moment(),
      error: ''
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  }

  onAmountChange = (e) => {
    const amount = e.target.value;

    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}));
    }
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}))
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({error: 'Please provide a description and amount.'}));
    } else {
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createAt: this.state.createAt.valueOf(),
        note: this.state.note,
        id: Math.floor(Math.random() * 10000)
      })
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form_error">{this.state.error}</p>}
        <input type="text" 
          className="text-input"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input type="text" 
          className="text-input"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <textarea cols="30" rows="10"
          placeholder="Add a note for your expense (optional)"
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    )
  }
}