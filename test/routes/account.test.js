const request = require("supertest");
const app = require("../../src/app");

const MAIN_ROUTE = "/accounts";
let user;

beforeAll(async () => {
   const res = await app.services.user.save({
      name: "user",
      mail: `${Date.now()}@mail.com.br`,
      passwd: "password"
   });

   user = { ...res[0] };
});

test("Deve inserir uma conta com sucesso", async () => {
   const response = await request(app)
      .post(MAIN_ROUTE)
      .send({ name: "Acc #1", user_id: user.id });
   expect(response.status).toBe(201);
   expect(response.body.name).toBe("Acc #1");
});
