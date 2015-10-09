import numeral from 'numeral';
import moment from 'moment';

const toMoney = (num) => {
  return numeral(num).format('$0,0.00');
};

const toDateTime = (mom) => {
  return mom.format('MMM D, h:mma');
};

const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export { toMoney, toDateTime, toTitleCase };
