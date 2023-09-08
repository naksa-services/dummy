const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        primaryKey: true,
        autoIncrement: true,
    },
    offer_type: {
        type: String,
        enum: ["fixed", "percentage"],
        default: "fixed",
    },
    minimum_order: {
        type: String,
        required: true,
        // unique: true,
    },
    coupon_code: {
        type: String,
        required: true,
        // unique: true,
    },
    vendor_store: {
        type: Array,
        required: true,
    },
    offer_elegible_on: {
        type: String,
        enum: ["selected", "all"],
        default: "all",
    },
    transdate: {
        type: Date,
        default: Date.now(),
    },
    expiry_date: {
        type: String,

    },
    tc_1: {
        type: String,
    },
    tc_2: {
        type: String,
    },
    tc_3: {
        type: String,
    },
    tc_4: {
        type: String,
    },
    tc_5: {
        type: String,
    },
    // otp: {
    //     type: String,
    // },
    offer_by: {
        type: String,
        enum: ["admin", "vendor"],
        default: "admin",
    },
});

module.exports = mongoose.model("offerModel", offerSchema);
