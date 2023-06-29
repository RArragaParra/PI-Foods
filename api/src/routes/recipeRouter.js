const { Router } = require('express');
const recipeRouter = Router();
const {getRecipesIdHandler, getRecipesNameHandler, postRecipesHandler} = require("../handlers/getRecipesHandler")

//idRecipe
recipeRouter.get("/:id", getRecipesIdHandler); 

recipeRouter.get("/name?=", getRecipesNameHandler);

recipeRouter.post("/", postRecipesHandler);

module.exports = recipeRouter;