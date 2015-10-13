import alt from '../alt';
import immutableUtil from 'alt/utils/ImmutableUtil';
import { List } from 'immutable';
import DashboardActions from '../actions/dashboard_actions';

class DashboardStore {
  constructor() {
    this.salesStats = List();

    this.bindListeners({
      handleUpdateSalesStats: DashboardActions.UPDATE_SALES_STATS,
      handleFetchSalesStats: DashboardActions.FETCH_SALES_STATS
    });
  }

  handleUpdateSalesStats(salesStats) {
    this.salesStats = salesStats;
  }

  handleFetchSalesStats() {
    this.salesStats = List();
  }
}

export default alt.createStore(immutableUtil(DashboardStore));
