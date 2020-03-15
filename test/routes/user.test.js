const supertest = require("supertest");
const app = require("../../src/app");

test("Listar todos os usuários", () => {
   const request = supertest(app);
   return request.get("/users").then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
   });
});

test("Inserir Usuário", () => {
   const name = `Random ${Math.random()
      .toString(36)
      .substring(7)}`;
   const mail = `${Date.now()}@mail.com.br`;
   const user = { name, mail, passwd: "senha" };
   const request = supertest(app);
   return request
      .post("/users")
      .send(user)
      .then((res) => {
         expect(res.status).toBe(201);
         expect(res.body).toHaveProperty("name");
      });
});

test("Não deve inserir usuário sem nome", () => {
   const user = { mail: "vitor", passwd: "senha" };
   const request = supertest(app);
   return request
      .post("/users")
      .send(user)
      .then((res) => {
         expect(res.status).toBe(400);
         expect(res.body.error).toBe("Nome é um atributo obrigatório");
      });
});

test("Não deve inserir usuário sem email", async () => {
   const user = { name: "Dont Care", passwd: "senha" };
   const request = supertest(app);
   const res = await request.post("/users").send(user);
   expect(res.status).toBe(400);
   expect(res.body.error).toBe("Email é um atributo obrigatório");
});
