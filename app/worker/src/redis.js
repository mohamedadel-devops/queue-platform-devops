const Redis = require("ioredis");

function createRedis() {
  const host = process.env.REDIS_HOST || "redis";
  const port = Number(process.env.REDIS_PORT || 6379);
  return new Redis({ host, port });
}

module.exports = { createRedis };

