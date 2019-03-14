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
        <button>Search</button>
        <style jsx>
          {`
					.search-form {
						width: 15rem;
						margin 1rem auto;
						display: inline;
					}
				`}
        </style>
      </form>
    );
  }
}
