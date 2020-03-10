const supertest = require("supertest");
const app = require("../../src/app");

test("Listar todos os usuários", () => {
   const request = supertest(app);
   return request.get("/users").then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.length).toBeGreaterThan(0);
   });
});

test("Inserir Usuário", () => {
   const mail = `${Date.now()}@mail.com.br`;
   const user = { name: "Alex", mail: mail, passwd: "senha" };
   const request = supertest(app);
   return request
      .post("/users")
      .send(user)
      .then((res) => {
         expect(res.status).toBe(201);
         expect(res.body).toHaveProperty("name", "Alex");
      });
});
