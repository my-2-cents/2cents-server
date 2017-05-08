let controller = {};

// respond with c.log and with arbitrary json
controller.test = (req, res, next) => {
  console.log('test begin!');
  res.json({ connection: 'true' });
};

module.exports = controller;
