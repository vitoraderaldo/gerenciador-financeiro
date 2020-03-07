const supertest = require("supertest");
const app = require("../src/app");

test("Listar todos os usuários", () => {
   const request = supertest(app);
   return request.get("/users").then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
      expect(res.body[0]).toHaveProperty("name", "Vitor");
   });
});

test("Inserir Usuário", () => {
   const user = { name: "Alex", email: "alex@mail.com" };
   const request = supertest(app);
   return request
      .post("/users")
      .send(user)
      .then((res) => {
         expect(res.status).toBe(201);
         expect(res.body).toHaveProperty("name", "Alex");
      });
});
