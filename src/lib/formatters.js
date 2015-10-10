/* @flow */
import numeral from 'numeral';
import moment from 'moment';
const Moment = moment().constructor;

const toMoney = (num: number) : string => {
  return numeral(num).format('$0,0.00');
};

const toDateTime = (mom: Moment) : string => {
  return mom.format('MMM D, h:mma');
};

const toTitleCase = (str: string) : string => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export { toMoney, toDateTime, toTitleCase };
