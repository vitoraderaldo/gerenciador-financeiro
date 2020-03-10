module.exports = {
   test: {
      client: "pg",
      version: "12",
      connection: {
         host: "localhost",
         user: "postgres",
         password: "123456",
         database: "financeiro"
      },
      migrations: {
         directory: "src/migrations"
      }
   }
};
