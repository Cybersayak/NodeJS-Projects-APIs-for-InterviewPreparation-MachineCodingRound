const app = require('express')();
const config = require('./src/config');

const PORT = config.server.port || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  console.log(`Environment: $`);
  
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
  });
});
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Rejection:', error);
  server.close(() => {
    console.log('Server closed due to unhandled rejection');
    process.exit(1)
  })
});
