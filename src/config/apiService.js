export default (process.env.NODE_ENV === 'production'
  ? 'http://localhost:3030/api'
  : 'http://localhost:3000/api');
