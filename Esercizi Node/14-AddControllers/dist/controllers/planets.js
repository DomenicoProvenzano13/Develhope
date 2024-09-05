import Joi from "joi";
// Definizione schema di validazione utilizzando Joi
const planetSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().min(3).max(30).required(),
});
// Database fittizio
let planets = [
    { id: 1, name: "Earth" },
    { id: 2, name: "Mars" },
];
const getAll = (req, res) => {
    res.status(200).json({ planets });
};
const getOneById = (req, res) => {
    const { id } = req.params;
    const planet = planets.find((p) => p.id === Number(id));
    res.status(200).json({ planet });
};
const create = (req, res) => {
    const { id, name } = req.body;
    const newPlanet = { id, name };
    const validateNewPlanet = planetSchema.validate(newPlanet);
    if (validateNewPlanet.error) {
        return res
            .status(400)
            .json({ msg: validateNewPlanet.error.details[0].message });
    }
    else {
        planets = [...planets, newPlanet];
        res.status(201).json({ msg: "The planet was created." });
    }
};
const updateById = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!id || !name) {
        return res.status(400).json({ msg: "ID and name are required." });
    }
    const newNamePlanet = { id: Number(id), name };
    const { error } = planetSchema.validate(newNamePlanet);
    if (error) {
        return res.status(400).json({ msg: error.details[0].message });
    }
    planets = planets.map((p) => (p.id === Number(id) ? Object.assign(Object.assign({}, p), { name }) : p));
    res.status(200).json({ msg: "The planet was updated." });
};
const deleteById = (req, res) => {
    const { id } = req.params;
    planets = planets.filter((p) => p.id !== Number(id));
    res.status(200).json({ msg: "The planet was deleted." });
};
export { getAll, getOneById, create, updateById, deleteById };
