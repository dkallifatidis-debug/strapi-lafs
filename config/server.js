module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('f0f1b3d3b2a9e53b204cab85bac7d38b8efddaab37d123ed85d5a7d272e2cfa1,38cb511f6087c6eceb35d5665fa7f85af056b110d0100e7c421b5a94c7738ffe,a95f45f5e1e5b5bc58d0a0474b1f5ac23650a0beba2969f33a519d15cf54fe7b,64ed6176c7712af133a8682c628c49478d9f36b438353ee7aa682a0655c56577'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
