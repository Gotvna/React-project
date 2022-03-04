module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b59944b2427d11ac952a0d15af21b9b2'),
  },
});
