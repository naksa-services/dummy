const mongoose = require("mongoose");

const CustomerOrderSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        primaryKey: true,
        autoIncrement: true,
    },
    deliveryCharge: {
        type: Number,
        required: false,
    },
    surgeCharge: {
        type: Number,
        required: false,
    },
    gst: {
        type: Number,
        required: true,
    },
    total_amount: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    offer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        foreignKey: "id",
        ref: "offerModel",
    },
    cart_data: {
        type: Array,
        required: true,
    },
    address_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        foreignKey: "id",
        ref: "CustomerOrder",
    },
    cid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        foreignKey: "cid",
        ref: "customer",
    },
    transdate: {
        type: String,
        required: true
    },
    vendorStatus: {
        type: String,
        required: false,

    },
    deliveryBoyStatus: {
        type: String,
        required: false,

    },
    packingTime: {
        type: String,
        required: false,

    },
    deliveryTime: {
        type: String,
        required: false,

    },
    orderDeliveryStatus: {
        type: String,
        enum: ["ontime", "delayed"],
        default: "ontime",
        required: false,

    },
    vid: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        foreignKey: "id",
        ref: "vendor",
    },
    cid: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        foreignKey: "id",
        ref: "deliveryBoy",
    },
    paymentStatus: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("CustomerOrder", CustomerOrderSchema);
