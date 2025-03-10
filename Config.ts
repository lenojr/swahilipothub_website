export const config = {
  appName: 'SwahiliPothub',
  port: 3000,
  database: {
    host: 'localhost',
    port: 5432,
    username: 'your-username',
    password: 'your-password',
    databaseName: 'swahilipothub_db'
  },
  jwtSecret: 'your-secret-key',
  apiEndpoints: {
    users: '/api/users',
    posts: '/api/posts'
  }
};
