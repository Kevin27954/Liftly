const mongoose = require('mongoose');
const { Schema } = mongoose;

const Exercise = new Schema(
    {
        id: mongoose.Types.ObjectId,
        workout: String,
        category: String
    },
    { collection: 'exercises', strict: false }
);

module.exports = mongoose.connection.useDb('appdata').model('exercises', Exercise);