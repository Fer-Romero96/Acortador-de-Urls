const Url = require('../models/Url');

exports.index = (req, res) => {
  let urls = Url.all().then((urls) => {
    res.render('homepage/index', {urls: urls});
  });
}
