const db = require("../index").db;

async function cart(req, res) {
  db.run("INSERT INTO cart(user_id) VALUES(?)", [req.body.user_id], (err) => {
    res.send(JSON.stringify({ response: "created" }));
  });
}

async function userCart(req, res) {
  db.all(
    "SELECT * FROM users join cart on users.id = cart.user_id where cart.id = ?",
    [req.params.id],
    (err, data) => {
      if (err) {
        res.send(JSON.stringify({ response: "Something went wrong" }));
      }
      res.send(data);
    }
  );
}

module.exports = { cart,userCart };
