const express = require("express");
const router = express.Router();
const redguessController = require("../controllers/redguessController");

router.post("/enviar", function (req, res) {
    redguessController.enviar(req, res);
})

module.exports = router