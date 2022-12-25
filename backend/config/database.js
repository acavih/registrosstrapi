const path = require('path');
const { URL } = require('url');

module.exports = ({ env }) => {
  const databaseString = env('DATABASE_URL', 'mysql://root@localhost:3306/strapitest')
  const databaseUrl = new URL(databaseString)

  // console.log(databaseUrl)
  return {
    connection: {
      client: databaseUrl.protocol.replace(':', ''),
      connection: {
        connectionString: databaseString,

        /*host: env('DATABASE_HOST', databaseUrl.hostname),
        port: env.int('DATABASE_PORT', databaseUrl.port),
        database: env('DATABASE_NAME', databaseUrl.pathname.replace('/', '')),
        user: env('DATABASE_USERNAME', databaseUrl.username),
        password: env('DATABASE_PASSWORD', databaseUrl.password),*/
        // schema: env('DATABASE_SCHEMA', 'public'), // Not required
        /*ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },*/
      },
      useNullAsDefault: true,
    },
  }
};
