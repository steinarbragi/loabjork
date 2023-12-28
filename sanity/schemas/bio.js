export default {
  name: 'bio',
  type: 'document',
  title: 'BIO',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titill',
    },
    {
      name: 'content',
      type: 'text',
      title: 'Texti',
    },
    {
      name: 'CV',
      type: 'file',
      title: 'CV',
    },
  ],
};
