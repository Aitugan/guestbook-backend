const express = require("express");
const router = express.Router();
const Controller = require("./controllers/messages.controller");

router.get('/api/messages', Controller.getAll);
router.post('/api/messages', Controller.create);

module.exports = router;