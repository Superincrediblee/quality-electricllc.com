const API =
  process.env.NODE_ENV === 'production'
    ? 'https://momaitest.vercel.app/api'
    : 'http://localhost:3000/api';
module.exports = {
  API,
};
