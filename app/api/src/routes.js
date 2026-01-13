const express = require("express");
const { createRedis } = require("./redis");

const router = express.Router();
const redis = createRedis();

router.get("/health", async (req, res) => {
  try {
    await redis.ping();
    return res.json({ ok: true });
  } catch {
    return res.status(500).json({ ok: false });
  }
});

router.post("/jobs", express.json(), async (req, res) => {
  const payload = req.body || {};
  const job = { id: Date.now(), payload };

  await redis.lpush("jobs", JSON.stringify(job));
  return res.status(202).json({ accepted: true, job });
});

module.exports = router;

