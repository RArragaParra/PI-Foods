const { Router } = require('express');
const dietsRouter = Router();
const getDietsHandler = require("../handlers/getDietsHandler")

dietsRouter.get("/", getDietsHandler)

module.exports = dietsRouter;