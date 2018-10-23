export default (process.env.NODE_ENV === 'production'
  ? 'http://ec2-34-238-248-92.compute-1.amazonaws.com/api'
  : 'http://localhost:3000/api');
