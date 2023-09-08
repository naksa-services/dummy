const mongoose = require("mongoose");

const BannerModelSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        primaryKey: true,
        autoIncrement: true,
    },
    cid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        foreignKey: "id",
        ref: "mainCategory",
    },

    photo: {
        type: String,
        required: true,
    },

    transdate: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("BannerModel", BannerModelSchema);
