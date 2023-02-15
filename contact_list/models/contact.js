const mongoose = require('mongoose');
const contactschema = new mongoose.schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    }
});
const Contact = mongoose.model('Contact', contactschema);
module.export = Contact;