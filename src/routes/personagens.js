const express = require("express");
const router = express.Router();
const redguessController = require("../controllers/personagensController");

router.post("/buscar", function (req, res) {
    redguessController.buscar(req, res);
})

module.exports = router