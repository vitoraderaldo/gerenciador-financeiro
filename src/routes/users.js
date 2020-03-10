module.exports = (app) => {
   const findAll = async (req, res) => {
      let users = await app.db("users").select();
      res.status(200).json(users);
   };

   const create = async (req, res) => {
      let user = await app.db("users").insert(req.body, "*");
      res.status(201).json(user[0]);
   };

   return { findAll, create };
};
