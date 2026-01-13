const { createRedis } = require("./redis");

const redis = createRedis();

async function run() {
  console.log("Worker started...");
  while (true) {
    const item = await redis.brpop("jobs", 0);
    const jobStr = item[1];
    const job = JSON.parse(jobStr);

    console.log("Processing job:", job.id, job.payload);
    await new Promise((r) => setTimeout(r, 800));
    console.log("Done job:", job.id);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

