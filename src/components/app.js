import React from 'react';
import MainHeader from './main_header';
import Page from './page';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <MainHeader />
        <Page>
          <h1>Page Title</h1>
        </Page>
      </div>
    );
  }
}
