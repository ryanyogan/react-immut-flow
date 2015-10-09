import React from 'react';
import PageHeader from './page_header';

export default class Orders extends React.Component {
  render() {
    return (
      <div className='orders'>
        <PageHeader>
          <h1>Orders</h1>
        </PageHeader>
      </div>
    );
  }
}
