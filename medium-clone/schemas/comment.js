export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'E-Mail',
      type: 'string',
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
        name: 'post',
        title: 'Post',
        type: 'reference',
        to: [{type: 'post'}],
    },
    {
        name: 'approved',
        title: 'Approved',
        type: 'boolean',
        description: "Comments won't be available on the website until they're approved.",
    },
  ],
}
