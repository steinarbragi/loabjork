export default {
  name: 'publication',
  type: 'document',
  title: 'Publications',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titill',
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
      name: 'date',
      type: 'date',
      title: 'Dagsetning',
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
      name: 'link',
      type: 'url',
      title: 'Linkur',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
};
