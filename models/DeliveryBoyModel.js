const mongoose = require("mongoose");

const DeliveryBoySchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: String,
        required: false,
        maxLength: 50,
    },
    email: {
        type: String,
        // unique: true,
    },
    otp: {
        type: String,
        // unique: true,
    },
    password: {
        type: String,
        // unique: true,
    },
    phone: {
        type: String,
        required: true,
        maxLength: 10,
    },

    pan: {
        type: String,
    },
    dl_number: {
        type: String,
    },
    aadharnumber: {
        type: String,
    },
    rcnumber: {
        type: String,
    },
    photo_url: {
        type: String,
    },
    rc_url: {
        type: String,
    },
    dl_url: {
        type: String,
    },
    pancard_url: {
        type: String,
    },

    aadharcard_url: {
        type: String,
    },
    panstatus: {
        type: String,
    },
    aadharstatus: {
        type: String,
    },
    dlstatus: {
        type: String,
    },
    rcstatus: {
        type: String,
    },
    transdate: {
        type: Date,
        default: Date.now(),
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive",
    },
    mob_notification: {
        type: String,
    },
    isOnline: {
        type: Boolean,
        default: false
    },
    // otp: {
    //     type: String,
    // },
    role: {
        type: String,
        enum: ["admin", "deliveryboy", "vendor", "customer"],
        default: "deliveryboy",
    },
});

module.exports = mongoose.model("deliveryBoy", DeliveryBoySchema);
