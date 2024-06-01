const express = require("express");
const router = express.Router();
const personagensController = require("../controllers/personagensController");

router.post("/buscar", function (req, res) {
    personagensController.buscar(req, res);
})

module.exports = router