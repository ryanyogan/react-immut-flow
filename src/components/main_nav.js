import React from 'react';

export default class MainNav extends React.Component {
  render() {
    return (
      <nav className='main-nav'>
        <a>Dashboard</a>
        <a className='current'>Orders</a>
        <a>Catalog</a>
      </nav>
    );
  }

  shouldComponentUpdate() {
    return false;
  }
}
