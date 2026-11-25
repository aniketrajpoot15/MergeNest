import mongoose from 'mongoose';
import { env } from './env.js';

const MAX_CONNECTION_RETRIES = 3;
const RETRY_DELAY_MS = 3000;
const SERVER_SELECTION_TIMEOUT_MS = 5000;

let listenersRegistered = false;

/**
 * Pause execution between database connection retries.
 * @param {number} delayMs
 * @returns {Promise<void>}
 */
const waitForRetry = (delayMs) =>
  new Promise((resolve) => {
    setTimeout(resolve, delayMs);
  });

/**
 * Attach Mongoose lifecycle event listeners once.
 */
const registerConnectionEvents = () => {
  if (listenersRegistered) return;

  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });

  mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error.message);
  });

  mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB disconnected');
  });

  listenersRegistered = true;
};

/**
 * Connect to MongoDB with retry logic for transient startup failures.
 * @returns {Promise<typeof mongoose>}
 */
export const connectDatabase = async () => {
  registerConnectionEvents();

  for (let attempt = 1; attempt <= MAX_CONNECTION_RETRIES; attempt += 1) {
    try {
      const connection = await mongoose.connect(env.MONGODB_URI, {
        serverSelectionTimeoutMS: SERVER_SELECTION_TIMEOUT_MS,
      });
      return connection;
    } catch (error) {
      console.error(
        `MongoDB connection attempt ${attempt}/${MAX_CONNECTION_RETRIES} failed: ${error.message}`
      );

      if (attempt === MAX_CONNECTION_RETRIES) {
        throw new Error(
          `Unable to connect to MongoDB after ${MAX_CONNECTION_RETRIES} attempts`,
          { cause: error }
        );
      }

      console.log(
        `Retrying MongoDB connection in ${RETRY_DELAY_MS / 1000}s...`
      );
      await waitForRetry(RETRY_DELAY_MS);
    }
  }
};

/**
 * Gracefully close the active MongoDB connection.
 * @returns {Promise<void>}
 */
export const disconnectDatabase = async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
    console.log('MongoDB connection closed gracefully');
  }
};
