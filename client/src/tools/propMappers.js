import { zipObject } from 'lodash';

export const mapState = (keys) => (state) => {
  return zipObject(keys, keys.map((key) => {
    const value = state.get(key);
    return value && value.toJS ? value.toJS() : value;
  }));
};

export const mapPageData = (state) => {
  const pageData = state.get('pageData');
  return pageData ? pageData.toJS() : {};
};