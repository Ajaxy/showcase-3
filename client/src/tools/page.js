import { browserHistory } from 'react-router';
import qs from 'qs';

export const change = (url, query) => {
  if (query) {
    url += `?${qs.stringify(query)}`;
  }

  browserHistory.push(url);
};

export const refresh = () => {
  browserHistory.replace(window.location.pathname);
};

export const current = () => {
  return window.location.pathname;
};