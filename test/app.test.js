const supertest = require("supertest");
const app = require("../src/app");

test("Deve responder na raiz", () => {
   const request = supertest(app);

   return request.get("/").then((res) => {
      expect(res.status).toBe(200);
   });
});
