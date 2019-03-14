import React, { Component } from 'react';

export default class Sort extends Component {
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

  handleSortSelection = async event => {
    const { name, value } = event.target;
    await this.setState({
      [name]: value
    });
    this.handleSort();
  };

  handleSort() {
    const { artists, onChange } = this.props;
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

    if (this.state.order === 'ascending') {
      mapped = this.ascendingSort(mapped);
    }

    if (this.state.order === 'descending') {
      mapped = this.descendingSort(mapped);
    }

    let result = mapped.map(el => {
      return artists[el.index];
    });

    return onChange(result);
  }

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
              className='name-btn'
              onChange={this.handleSortSelection}
              checked={this.state.name === 'first'}
            />
            <span>First</span>
            <input
              type='radio'
              name='name'
              value='last'
              className='name-btn'
              onChange={this.handleSortSelection}
              checked={this.state.name === 'last'}
            />
            <span>Last</span>
          </section>
          <p>from</p>
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
          `}
        </style>
      </form>
    );
  }
}
