module.exports = {
  development: {
    username: process.env.USER,
    password: null,
    database: 'makersbnb',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: process.env.USER,
    password: null,
    database: 'makersbnb_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};
