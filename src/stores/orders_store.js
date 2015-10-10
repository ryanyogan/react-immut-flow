import alt from '../alt';
import OrdersActions from '../actions/orders_actions';

class OrdersStore {
  constructor() {
    this.orders = [];
    this.selectedStatus = 'all';

    this.bindListeners({
      handleUpdateOrders: OrdersActions.UPDATE_ORDERS,
      handleUpdateSelectedStatus: OrdersActions.UPDATE_SELECTED_STATUS,
      handleFetchOrders: OrdersActions.FETCH_ORDERS
    });
  }

  handleUpdateOrders(orders) {
    this.orders = orders;
  }

  handleUpdateSelectedStatus(status) {
    this.selectedStatus = status;
  }
  
  handleFetchOrders() {
    this.orders = [];
  }
}

export default alt.createStore(OrdersStore);
