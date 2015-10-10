import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect.js';
import Orders from '../../src/components/orders';
import OrdersTable from '../../src/components/orders/orders_table';
import { setupFakeDOM } from '../test_helper';

setupFakeDOM();

describe('components/orders', () => {
  let subject;

  beforeEach(() => {
    subject = TestUtils.renderIntoDocument(<Orders />);
  });

  describe('#render', () => {
    describe('when selectedStatus is "all"', () => {
      it('renders all orders', () => {
        const table = TestUtils.findRenderedComponentWithType(subject, OrdersTable);
        const statuses = table.props.orders.map((o) => o.orderStatus);
        expect(statuses).to.eql([
          'open', 'open', 'open', 'shipped'
        ]);
      });
    });

    describe('when selectedStatus is "open"', () => {
      beforeEach(() => {
        subject.setState({ selectedStatus: 'open' });
      });

      it('renders open orders', () => {
        const table = TestUtils.findRenderedComponentWithType(subject, OrdersTable);
        const statuses = table.props.orders.map((o) => o.orderStatus);
        expect(statuses).to.eql([
          'open', 'open', 'open'
        ]);
      });
    });

    describe('when selectedStatus is "shipped"', () => {
      beforeEach(() => {
        subject.setState({ selectedStatus: 'shipped' });
      });

      it('renders open orders', () => {
        const table = TestUtils.findRenderedComponentWithType(subject, OrdersTable);
        const statuses = table.props.orders.map((o) => o.orderStatus);
        expect(statuses).to.eql([
          'shipped'
        ]);
      });
    });
  });

});
