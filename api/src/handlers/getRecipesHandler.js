const getRecipesIdHandler = (req, res) => {
    const {id} = req.params;

    res.status(200).send(`Detalle de receta especifica recibido ${id}`)
}

const getRecipesNameHandler = (req, res) => {
    const {name} = req.query;

    if(name) {
        res.status(200).send(`Nombre recibido por query ${name}`)
    }

    res.status(200).send("Todo Ok");
}

const postRecipesHandler = (req, res) => {
    const {name, level, origin} = req.body;

    res.status(200).send(`Informacion recibida para crear nueva receta nombre ${name}, dificultad ${level} y pais de origen ${origin}`)
}

module.exports = {
    getRecipesIdHandler,
    getRecipesNameHandler,
    postRecipesHandler,
}