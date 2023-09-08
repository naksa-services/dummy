const { model } = require("mongoose");
const SupportModel = require("../models/SupportModel");

// create admin
const createSupport = async (req, res) => {
    try {
        const { name, phone, transdate, status, reason } = req.body;
        const response = await SupportModel.create({ name, phone, transdate, status, reason });
        res.status(200).json({
            success: true,
            data: response,
            message: "Support created successfully",
        });
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            // data: "internal server error",
            message: err.message,
        });
    }
};

// get admin
const getSupport = async (req, res) => {
    try {
        const admins = await SupportModel.find({});
        res.status(200).json({
            success: true,
            data: admins,
            message: "get successfully",
        });
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data: [],
            message: "something went wrong",
        });
    }
};

// get admin By Id
const getSupportByvendorPhone = async (req, res) => {
    try {
        const id = req.params.id;
        const admin = await SupportModel.find({ phone: id });

        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "No data found",
            });
        }
        res.status(200).json({
            success: true,
            data: admin,
            message: "get successfully",
        });
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data: {},
            message: "something went wrong",
        });
    }
};

// delete admin

const deleteSupport = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await SupportModel.findByIdAndDelete(id);
        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "No data found",
            });
        }
        res.json({
            success: true,
            message: "deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "somthing went wrong",
        });
    }
};

const updateSupportStatus = async (req, res) => {
    try {
        const { id, status, assigned_person, transdate } = req.body;
        const admin = await SupportModel.findByIdAndUpdate(
            { _id: id },
            { status, assigned_person, transdate },
            { new: true }
        );

        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "No data found with right Id",
            });
        }
        res.status(200).json({
            success: true,
            data: admin,
            message: `wallet updated successfully`,
        });
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        });
    }
};

module.exports = {
    createSupport,
    getSupport,
    getSupportByvendorPhone,
    deleteSupport,
    updateSupportStatus,
};
