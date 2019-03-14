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
    const { artists, onChange } = this.props;
    const mapped = artists.map((artist, i) => {
      return {
        index: i,
        value: artist.artist ? artist.artist.split(' ')[1].toLowerCase() : 'zz'
      };
    });

    mapped.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });

    let result = mapped.map(el => {
      return artists[el.index];
    });

    return onChange(result);
  }

  handleSortChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSort() {
    console.log('hi');
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
              onChange={this.handleSortChange}
            />
            <span>First</span>
            <input
              type='radio'
              name='name'
              value='last'
              className='name-btn'
              onChange={this.handleSortChange}
              checked
            />
            <span>Last</span>
          </section>
          <p>from</p>
          <section className='order-selection'>
            <input
              type='radio'
              name='order'
              value='ascending'
              onChange={this.handleSortChange}
              checked
            />
            <span>A&rarr;Z</span>
            <input
              type='radio'
              name='order'
              value='descending'
              onChange={this.handleSortChange}
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
