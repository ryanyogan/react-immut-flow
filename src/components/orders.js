import React from 'react';
import PageHeader from './page_header';
import OrdersTable from './orders/orders_table';
import { toTitleCase } from '../lib/formatters';
import OrdersStore from '../stores/orders_store';
import OrdersActions from '../actions/orders_actions';

const STATUSES = ['all', 'open', 'shipped'];

class TopCustomer extends React.Component {
  render() {
    const { topOrder } = this.props;
    if (!topOrder) return null;
    const firstName = topOrder.customer.split(' ')[0];
    return <div>Top customer: {firstName}</div>;
  }
}

export default class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = OrdersStore.getState();
  }

  componentDidMount() {
    OrdersStore.listen(this.onChange);
    OrdersActions.fetchOrders();
  }

  componentWillUnmount() {
    OrdersStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleAmountFilterChange(e) {
    OrdersActions.updateAmountFilter(e.currentTarget.value.trim() || null);
  }

  render() {
    const { selectedStatus, amountFilter } = this.state;

    const statuses = STATUSES.map((status, i) => {
      const className = status === selectedStatus ? 'selected status' : 'status';

      return (
        <a key={i} className={className} onClick={this.handleStatusClick.bind(this, status)}>
          {toTitleCase(status)}
        </a>
      );
    });

    let orders = this.state.orders;
    if (selectedStatus !== 'all') {
      orders = orders.filter((order) => {
        return order.orderStatus === selectedStatus;
      });
    }

    if (amountFilter) {
      orders = orders.filter(o => o.amount === parseFloat(amountFilter));
    }

    const topOrder = orders.length ? orders[0] : null;

    return (
      <div className='orders'>
        <PageHeader>
          <h1>Orders</h1>
          <nav className='status-nav'>{statuses}</nav>
          <form className='amount-filter'>
            <input
              type='text'
              placeholder='Filter by amount'
              value={amountFilter}
              onChange={this.handleAmountFilterChange.bind(this)} />
          </form>
        </PageHeader>

        <TopCustomer topOrder={topOrder} />
        <OrdersTable orders={orders} />
      </div>
    );
  }

  handleStatusClick(status) {
    OrdersActions.updateSelectedStatus(status);
  }
}
