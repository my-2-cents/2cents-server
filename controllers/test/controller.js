let controller = {};

controller.test = (req, res, next) => {
  console.log('test begin!');
  res.json({ connection: 'true' });
};

module.exports = controller;
