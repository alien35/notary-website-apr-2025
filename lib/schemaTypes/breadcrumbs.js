export const breadcrumbs = {
    name: 'breadcrumbs',
    title: 'Breadcrumbs',
    type: 'array',
    of: [
      {
        type: 'object',
        name: 'breadcrumbItem',
        title: 'Breadcrumb Item',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The name of this breadcrumb (e.g., "Home" or "Blog").',
          },
          {
            name: 'url',
            title: 'URL',
            type: 'url',
            description: 'The URL for this breadcrumb item.',
            validation: (Rule) =>
              Rule.uri({
                allowRelative: true, // Allow relative URLs (e.g., "/blog")
                scheme: ['http', 'https'],
              }),
          },
        ],
      },
    ],
  };
  