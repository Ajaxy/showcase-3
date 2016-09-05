export const forbidden = {
  title: '403',
  type: 'object',
  attributes: {
    error: {
      type: 'integer',
      value: 403
    }
  },
  required: ['error']
};

export const serverError = {
  title: '500',
  type: 'object',
  attributes: {
    error: {
      type: 'integer',
      value: 500
    }
  },
  required: ['error']
};