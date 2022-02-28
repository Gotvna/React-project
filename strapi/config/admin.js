module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4197e1b2c8c08723e1f4ce6a731cce5e'),
  },
});
