var Annotations = require('../models/annotations');

module.exports = {
    async ler(request, response) {
        var priority = request.query;
        var find = await Annotations.find(priority);
        return response.json(find);
    },

    async atualizar(request, response) {
        var { id } = request.params;
        var annotation = await Annotations.findOne({ _id: id });

        annotation.priority = !annotation.priority;

        await annotation.save();
        return response.json(annotation);
    }
} 