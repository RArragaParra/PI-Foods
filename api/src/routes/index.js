const { Router } = require('express');
const router = Router();
const recipeRouter = require("./recipeRouter") 
const dietsRouter = require("./dietsRouter")

router.use("/recipes", recipeRouter);

router.use("/diets", dietsRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
