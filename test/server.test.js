const supertest = require("supertest");

const request = supertest("http:localhost:3001");

test("Deve reconhecer prota 3001", async () => {
   await request.get("/").then((res) => {
      expect(res.status).toBe(200);
   });
});
