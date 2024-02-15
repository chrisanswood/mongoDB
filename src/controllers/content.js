var Annotations = require('../models/annotations');

module.exports = {
    async atualizar(request, response) {
        var { id } = request.params;
        var { notes } = request.body;
        var annotation = await Annotations.findOne({ _id: id });

        if (notes) {
            annotation.notes = notes;
            await annotation.save();
        }

        return response.json(annotation);
    }
} 