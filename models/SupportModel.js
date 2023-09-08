const mongoose = require("mongoose");

const SupportModelSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: String,
        required: true,

    },

    phone: {
        type: String,
        required: true,
    },

    transdate: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["created", "accpeted", "pending", "completed", "rejected"],
        default: "created",
    },
    assigned_person: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model("SupportModel", SupportModelSchema);
