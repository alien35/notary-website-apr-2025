import conditionalText from "./conditionalText";
import { imageBlock } from "./imageBlock";
import statePicker from "./statePicker";
import { table } from "./table";
import {worksOnDevices} from "./worksOnDevices";

export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'breadcrumbs',
      title: 'Breadcrumbs',
      type: 'breadcrumbs', // Use the reusable breadcrumbs schema
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' }, // standard block content
        {
          type: 'object',
          name: 'youtube',
          title: 'YouTube Embed',
          fields: [
            {
              name: 'url',
              title: 'YouTube Video URL',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https'],
                }),
            },
          ],
        },
        {
          type: 'object',
          name: 'pdfEmbed',
          title: 'PDF Embed',
          fields: [
            {
              name: 'url',
              title: 'PDF URL',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https'],
                }),
            },
          ],
        },
        {
          type: 'object',
          name: 'accordion',
          title: 'Accordion',
          fields: [
            {
              name: 'items',
              title: 'Accordion Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'accordionItem',
                  title: 'Accordion Item',
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    },
                    {
                      name: 'content',
                      title: 'Content',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
        imageBlock,
        conditionalText,
        table,
        worksOnDevices,
        statePicker
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
};

