const getDietsHandler = (req, res) => {
    const {diets} = req.body;

    if(!diets) {
        return res.status(200).send("Las dietas no se encontraron")
    }

    res.status(200).send("Tipos de dietas recibidos")
    
}

module.exports = getDietsHandler;