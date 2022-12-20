const router = require('express').Router();
const questionRoutes = require('./question-routes');

router.use('/study', questionRoutes);

module.exports = router;