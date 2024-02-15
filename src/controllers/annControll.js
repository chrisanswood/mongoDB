var Annotations = require('../models/annotations');

module.exports = {
    async read(request, response) {
        var data = await Annotations.find();
        return response.json(data);
    },

    async create(request, response) {
        var { title, notes, priority } = request.body;
        if (!notes || !title) {
            return response.status(400).json({ error: "Necessario um titulo e uma anotacao!" });
        }
        var created = await Annotations.create({
            title, notes, priority
        });
        return response.json(created);
    },

    async delete(request, response) {
        var { id } = request.params;
        var delete_ = await Annotations.findByIdAndDelete({ _id: id });

        if (delete_) {
            return response.json(delete_);
        }
        return response.status(401).json({ error: "sem registro encontrado" });
    }
} 