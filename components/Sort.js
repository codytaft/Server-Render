import React, { Component } from 'react';
import { array, func } from 'prop-types';

class Sort extends Component {
  constructor() {
    super();
    this.state = {
      name: 'last',
      order: 'ascending'
    };
  }
  componentDidMount() {
    this.handleSort();
  }

  // This handles state change from radio buttons
  handleSortSelection = async event => {
    const { name, value } = event.target;
    await this.setState({
      [name]: value
    });
    this.handleSort();
  };

  // Sorts the array
  handleSort() {
    const { artists, onChange } = this.props;

    // Maps over the passed down filtered artists
    // Returns object with Index and artist First or Last name
    let mapped = artists.map((artist, i) => {
      return {
        index: i,
        value: artist.artist
          ? artist.artist
              .split(' ')
              [this.state.name === 'last' ? 1 : 0].toLowerCase()
          : 'zz'
      };
    });

    // If A->Z selected invoke ascendingSort function
    if (this.state.order === 'ascending') {
      mapped = this.ascendingSort(mapped);
    }

    // If Z->A selected invoke ascendingSort function
    if (this.state.order === 'descending') {
      mapped = this.descendingSort(mapped);
    }

    // Map over result returning the elements in the new order
    let result = mapped.map(el => {
      return artists[el.index];
    });

    return onChange(result);
  }

  // Sorts A-Z
  ascendingSort(array) {
    return array.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });
  }
  // Sorts Z-A
  descendingSort(array) {
    return array.sort((a, b) => {
      if (a.value > b.value) {
        return -1;
      }
      if (a.value < b.value) {
        return 1;
      }
      return 0;
    });
  }

  render() {
    return (
      <form>
        <h5 className='sort-title'>&uarr;&darr; Sort by Name</h5>
        <section className='sort-selection'>
          <section className='name-selection'>
            <input
              type='radio'
              name='name'
              value='first'
              className='name-btn first-name'
              onChange={this.handleSortSelection}
              checked={this.state.name === 'first'}
            />
            <span>First</span>
            <input
              type='radio'
              name='name'
              value='last'
              className='name-btn last-name'
              onChange={this.handleSortSelection}
              checked={this.state.name === 'last'}
            />
            <span>Last</span>
          </section>
          <section className='order-selection'>
            <input
              type='radio'
              name='order'
              value='ascending'
              onChange={this.handleSortSelection}
              checked={this.state.order === 'ascending'}
            />
            <span>A&rarr;Z</span>
            <input
              type='radio'
              name='order'
              value='descending'
              onChange={this.handleSortSelection}
              checked={this.state.order === 'descending'}
            />
            <span>Z&rarr;A</span>
          </section>
        </section>
        <style jsx>
          {`
            form {
              text-align: center;
              margin-top: 1rem;
              font-size: 1.5rem;
            }
            .sort-title {
              text-transform: uppercase;
            }
            .sort-selection {
              display: inline-block;
              width: 20rem;
              margin-top: 1rem;
            }
            input {
              margin-left: 1rem;
            }
            span {
              margin-left: 1rem;
            }
            button,
            p {
              display: inline;
              font-size: 1.5rem;
            }
            button {
              background: none;
              color: rgb(191, 191, 191);
              border-radius: 20px;
              padding: 0.5rem 0.7rem;
              margin: 1rem 0.4rem;
              width: 6rem;
              border: 1px solid rgb(191, 191, 191);
            }
            button:hover {
              background: rgb(191, 191, 191);
              color: rgb(30, 30, 30);
              cursor: pointer;
            }

            .name-btn:active,
            .name-btn:focus {
              background: rgb(191, 191, 191);
              color: rgb(30, 30, 30);
              outline: none;
            }
            .name-selection {
              margin-botton: 1rem;
            }
            .order-selection {
              margin-top: 1rem;
            }
          `}
        </style>
      </form>
    );
  }
}

Sort.propTypes = {
  artists: array,
  onChange: func
};

export default Sort;
