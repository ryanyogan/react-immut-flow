import React from 'react';

export default class PageHeader extends React.Component {
  render() {
    return (
      <header className='page-header'>
        {this.props.children}
      </header>
    );
  }
}
