jest.mock("ioredis", () => {
  return jest.fn().mockImplementation(() => ({
    ping: jest.fn().mockResolvedValue("PONG"),
    quit: jest.fn().mockResolvedValue(null),
  }));
});

const request = require("supertest");
const app = require("../src/app");

test("GET /health responds", async () => {
  const res = await request(app).get("/health");
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ ok: true });
});

