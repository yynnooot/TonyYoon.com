const router = require('express').Router();

router.use('/about', require('./about'));
router.use('/development', require('./development'));
router.use('/userexperience', require('./userexperience'));
router.use('/illustration', require('./illustration'));
router.use('/contact', require('./contact'));


//errors
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});


module.exports = router;
