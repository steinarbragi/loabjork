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
      name: 'image',
      type: 'image',
      title: 'Mynd',
    },

    {
      name: 'CV',
      type: 'file',
      title: 'CV',
    },
  ],
};
