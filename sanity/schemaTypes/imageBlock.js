export const imageBlock = {
  name: 'imageBlock',
  title: 'Image Block',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'alt',
    },
    prepare({ media, title }) {
      return {
        title: title || 'Image Block',
        media,
      }
    },
  },
}
