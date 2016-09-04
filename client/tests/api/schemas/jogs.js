export const index = {
  title: 'Result',
  type: 'object',
  attributes: {
    jogs: {
      title: 'Jogs set',
      type: 'array',
      items: {
        title: 'Jog',
        type: 'object',
        properties: {
          id: {
            type: 'number'
          },
          date: {
            type: 'string'
          },
          duration: {
            type: 'number'
          },
          distance: {
            type: 'number'
          },
          avg_speed: {
            type: 'number'
          }
        },
        required: ['id', 'date', 'duration', 'distance', 'avg_speed']
      }
    },
    required: ['jogs']
  }
};

export const show = {
  
};