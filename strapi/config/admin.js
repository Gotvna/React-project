module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fc6d0e132f0235572c307b9ed30ce092'),
  },
});
