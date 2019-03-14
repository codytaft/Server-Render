import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <form className='search-form'>
        <input
          type='text'
          placeholder='Search'
          className='search-input'
          name='search'
          value={this.state.search}
          onChange={this.handleChange}
        />
        <style jsx>
          {`
            .search-form {
              width: auto;
              display: inline;
            }
            input {
              background: none;
              border: 1px solid rgb(191, 191, 191);
              padding: 0.3rem 0.7rem;
              font-size: 2rem;
              color: rgb(191, 191, 191);
              margin-top: 1rem;
            }
            input:focus {
              outline: none;
            }
          `}
        </style>
      </form>
    );
  }
}
