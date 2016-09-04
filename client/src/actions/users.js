import * as api from '../tools/api';

export const update = (id, data) => (dispatch) => {
  dispatch(api.put(`/users/${id}`, data));
};

export const remove = (id) => (dispatch) => {
  if (confirm('Are you sure?')) {
    dispatch(api.del(`/users/${id}`));
  }
};