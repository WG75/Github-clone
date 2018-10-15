export default (node.process.NODE_ENV === 'production'
  ? 'http://localhost:3030'
  : 'http://localhost:3000');
