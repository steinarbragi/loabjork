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
      title: 'Lýsing',
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
