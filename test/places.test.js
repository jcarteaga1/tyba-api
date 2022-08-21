const request = require("supertest");
const app = require("../src/app");

describe("Get places", () => {
    test("It should response the GET method", async () => {
      const response = await request(app)
      .get("/places/barranquilla")
      expect(response.statusCode).toBe(200);
    });
});