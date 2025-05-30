// Load environment variables from .env
import dotenv from 'dotenv';
dotenv.config();

import Redis from 'ioredis';

// Debug log to confirm the URI is loaded
console.log('[REDIS ENV]', process.env.REDIS_DATABASE_URI);

// Initialize Redis client using the URI
const redis = new Redis(process.env.REDIS_DATABASE_URI!);

// Optional: Add event listeners for better debugging
redis.on('connect', () => {
  console.log('✅ Redis connected successfully.');
});

redis.on('error', (err) => {
  console.error('❌ Redis connection error:', err.message);
});

export default redis;
