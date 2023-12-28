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
