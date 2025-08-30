export const journalBillingWidget = {
  title: 'Journal Billing Widget',
  name: 'journalBillingWidget',
  type: 'object',
  fields: [
    {
      name: 'monthly',
      title: 'Monthly Plan',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'price',
          title: 'Price',
          type: 'number',
        },
      ],
    },
    {
      name: 'yearly',
      title: 'Yearly Plan',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'price',
          title: 'Price',
          type: 'number',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
    },
    {
      name: 'annualSavingsLabel',
      title: 'Annual Savings Label',
      type: 'string',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: 'monthly.name',
    },
    prepare({ title }) {
      return {
        title: title ? `Journal Billing: ${title}` : 'Journal Billing Widget',
      };
    },
  },
};
