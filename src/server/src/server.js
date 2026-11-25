import http from 'node:http';
import { env } from './config/env.js';
import app from './app.js';
import { connectDatabase, disconnectDatabase } from './config/database.js';

const httpServer = http.createServer(app);
let isShuttingDown = false;

/**
 * Close the HTTP server and MongoDB connection cleanly on termination signals.
 * @param {string} signal
 */
const shutdown = async (signal) => {
  if (isShuttingDown) return;
  isShuttingDown = true;

  console.log(`\nReceived ${signal}. Shutting down gracefully...`);

  try {
    await new Promise((resolve, reject) => {
      if (!httpServer.listening) {
        resolve();
        return;
      }
      httpServer.close((error) => {
        if (error) reject(error);
        else resolve();
      });
    });

    await disconnectDatabase();
    process.exit(0);
  } catch (error) {
    console.error('Error during graceful shutdown:', error.message);
    process.exit(1);
  }
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

process.on('unhandledRejection', (reason) => {
  const message = reason instanceof Error ? reason.message : String(reason);
  console.error('Unhandled Promise Rejection:', message);
  shutdown('unhandledRejection');
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error.message);
  shutdown('uncaughtException');
});

/**
 * Connect to the database first, then start listening for HTTP requests.
 */
const startServer = async () => {
  try {
    await connectDatabase();

    httpServer.listen(env.PORT, () => {
      console.log(
        `MergeNest API server listening on port ${env.PORT} (${env.NODE_ENV})`
      );
    });
  } catch (error) {
    console.error('Failed to start MergeNest server:', error.message);
    process.exit(1);
  }
};

startServer();
