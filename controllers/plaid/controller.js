const Plaid = require('../../services/plaid.js');
let controller = {};

controller.connect = (req, res) => {
  Plaid.connect(req.body)
    .then(r => r.json())
    .then(data => {
      res
        .status(200)
        .json(data)
    })
    .catch((err) => {
      res
        .status(400)
        .json(err)
    })
}

module.exports = controller;
