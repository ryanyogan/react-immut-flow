import moment from 'moment';
import { fromJS } from 'immutable';

function parseOrders(rawOrders) {
  return rawOrders.map((order) => {
    return Object.assign(
      {},
      order,
      {
        orderedAt: moment(order.orderedAt),
        products: order.products.map((product) => {
          return Object.assign(
            {},
            product,
            {
              amount: parseFloat(product.amount)
            }
          );
        }),
        amount: parseFloat(order.amount)
      }
    );
  });
};

const OrdersFetcher = {
  fetch() {
    return fetch('/orders.json')
      .then(resp => resp.json())
      .then(parseOrders)
      .then((orders => fromJS(orders)));
  }
};

export default OrdersFetcher;
