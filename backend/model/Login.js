const mongoose = require('mongoose');
const { Schema } = mongoose;

const Login = new Schema(
    {
        id: mongoose.Types.ObjectId,
        name: String,
        password: String,
        email: String
    },
    { collection: 'login', strict: false }
)

module.exports = mongoose.connection.useDb('users').model('login', Login);