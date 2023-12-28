export default {
  name: 'shop',
  type: 'document',
  title: 'Shop',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titill',
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Mynd',
    },
    {
      name: 'size',
      type: 'string',
      title: 'Stærð',
    },
    {
      name: 'selt',
      type: 'boolean',
      title: 'Selt',
    },
  ],
};
