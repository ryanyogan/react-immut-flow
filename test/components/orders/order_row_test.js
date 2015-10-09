import expect from 'expect.js';
import React from 'react';
import { renderShallow } from '../../test_helper';
import OrderRow from '../../../src/components/orders/order_row';

import data from '../../../src/data/orders';

describe('components/orders/order_row', () => {
  let order;
  let subject;

  beforeEach(() => {
    order = data[0]; // Only one order object
    subject = renderShallow(<OrderRow order={order} />);
  });

  it('renders the columns', () => {
    const tds = subject.props.children.filter((c) => c.type === 'td');
    const tdsContent = tds.map((td) => td.props.children);
    expect(tdsContent).to.eql([
      'ASX13X',
      'Bruce Wayne',
      'Mar 9, 12:14pm',
      'Blue Wool Shirt, Pearl White Shirt',
      '$340.75',
      'Authorized',
      'Open'
    ]);
  });
});
