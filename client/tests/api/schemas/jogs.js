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
            type: 'string'
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
    manageable: {
      type: 'boolean'
    }
  },
  required: ['jogs', 'manageable']
};

export const show = {
  title: 'Result',
  type: 'object',
  attributes: {
    jog: {
      title: 'Jog info',
      type: 'object',
      properties: {
        id: {
          type: 'string'
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
    },
    manageable: {
      type: 'boolean'
    }
  },
  required: ['jog']
};