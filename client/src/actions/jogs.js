import * as api from '../tools/api';
import * as page from '../tools/page';

export const create = (data) => (dispatch) => {
  dispatch(api.post('/jogs', data));
};

export const update = (id, data) => (dispatch) => {
  dispatch(api.put(`/jogs/${id}`, data));
};

export const remove = (id) => (dispatch) => {
  if (confirm('Are you sure?')) {
    dispatch(api.del(`/jogs/${id}`));
  }
};

export const setupFilter = (filter) => () => {
  page.change(page.current().split('&')[0], {
    filter: {
      date_from: filter.dateFrom,
      date_to: filter.dateTo
    }
  });
};

export const clearFilter = () => () => {
  page.change(page.current().split('&')[0]);
};