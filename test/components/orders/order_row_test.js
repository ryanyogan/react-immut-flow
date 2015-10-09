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

  it('works', () => {
    expect(1).to.eql(1);
  });
});
