const { model } = require("mongoose");
const offerModel = require("../models/offerModel");

// create admin
const createCoupon = async (req, res) => {
    try {
        const { offer_type, minimum_order, coupon_code, vendor_store, offer_elegible_on, transdate, expiry_date, offer_by, tc_1, tc_2, tc_3, tc_4, tc_5 } = req.body;
        const response = await offerModel.create({ offer_type, minimum_order, coupon_code, vendor_store, offer_elegible_on, transdate, expiry_date, offer_by, tc_1, tc_2, tc_3, tc_4, tc_5 });
        res.status(200).json({
            success: true,
            data: response,
            message: "offer created successfully",
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
const getOffer = async (req, res) => {
    try {
        const admins = await offerModel.find({});
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
const getOfferByVendorStore = async (req, res) => {
    try {
        const id = req.params.id;
        const admin = await offerModel.find({ vendor_store: id });

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

const deletOffer = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await offerModel.findByIdAndDelete(id);
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

const updateOffer = async (req, res) => {
    try {
        const { id, offer_type, minimum_order, coupon_code, vendor_store, offer_elegible_on, transdate, expiry_date, offer_by, tc_1, tc_2, tc_3, tc_4, tc_5 } = req.body;
        const admin = await offerModel.findByIdAndUpdate(
            { _id: id },
            { offer_type, minimum_order, coupon_code, vendor_store, offer_elegible_on, transdate, expiry_date, offer_by, tc_1, tc_2, tc_3, tc_4, tc_5 },
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
            message: ` offer data updated successfully`,
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
    createCoupon,
    getOffer,
    getOfferByVendorStore,
    deletOffer,
    updateOffer,
};
