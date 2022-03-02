module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd6cd5a273668db46e3466457d1541710'),
  },
});
