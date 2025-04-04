// schemaTypes/table.js

export const table = {
    name: 'table',
    title: 'Table',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'rows',
        title: 'Rows',
        type: 'array',
        of: [
          {
            title: 'Row',
            type: 'object',
            fields: [
              {
                name: 'cells',
                title: 'Cells',
                type: 'array',
                of: [{ type: 'string', title: 'Cell' }], // Define each cell as a string
              },
            ],
          },
        ],
      },
    ],
  };
  
  