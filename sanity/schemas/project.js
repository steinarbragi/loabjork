export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titill',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Stutt Lýsing',
    },
    {
      name: 'content_is',
      type: 'array',
      title: 'Content IS',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'content_en',
      type: 'array',
      title: 'Content EN',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'video',
      type: 'string',
      title: 'Video',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: input => input.toLowerCase().replace(/\s/g, '-').slice(0, 200),
      },
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
};
