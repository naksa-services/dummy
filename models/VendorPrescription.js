const mongoose = require("mongoose");

const vendorCategorySchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: String,
    required: true,
    maxLength: 500,
  },
  prescription: {
    type: String,
  },
  transdate: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  amount:{
    type:String,
  },
  gst:{
    type:String
  },
  packing_time:{
    type:Date
  },
  status:{
    type:String,
    enum:["uploaded", "view","price updated", "packed", "out_for_delivery", "completed"],
    default:"uploaded",
  },


  vid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "vid",
    ref: "vendor",
  },
  cid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    foreignKey: "id",
    ref: "customer",
  },
});

module.exports = mongoose.model(" vendorCategory", vendorCategorySchema);
