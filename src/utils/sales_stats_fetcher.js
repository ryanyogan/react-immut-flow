import { fromJS } from 'immutable';

const SalesStatsFetcher = {
  fetch() {
    return fetch('/sales_stats.json')
      .then(resp => resp.json())
      .then(json => json.map(parseFloat))
      .then(salesStats => fromJS(salesStats));
  }
};

export default SalesStatsFetcher;
