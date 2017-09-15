// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgress://localhost/gmovie'
    },
    test: {
      client: 'pg',
      connection: 'postgress://localhost/test-gmovie'
      },
      // uncomment this for deploying to heroku
      // production: {
      // client: 'pg',
      // connection: process.env.DATABASE_URL
      // }
  };
