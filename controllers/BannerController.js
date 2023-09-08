const { model } = require("mongoose");
const multer = require('multer');
// const Formidable = require('formidable');
// const detectFileType = require('detect-file-type');
const { v1: uuidv1 } = require('uuid');
const BannerModel = require("../models/BannerModel");
//Get category

const getBanner = async (req, res) => {
    try {
        const mainCategories = await BannerModel.find({});
        res.status(200).json({
            success: true,
            data: mainCategories,
            message: "Get all main banner successfully",
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
//Get Category by id
const getBannerById = async (req, res) => {
    try {
        const id = req.params.id;
        const mainCategory = await BannerModel.find({ cid: id });

        if (!mainCategory) {
            return res.status(404).json({
                success: false,
                message: "No banner found with ID",
            });
        }

        res.status(200).json({
            success: true,
            data: mainCategory,
            message: `banner ${id} data fetch successfully`,
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

const Storage = multer.diskStorage({
    destination: './uploads/banner',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
});

const upload = multer({
    storage: Storage,

}).single('photo')
//Post cotegory
const createBanner = async (req, res) => {

    //extract name, photo, and photoname from request body
    // const url = req.protocol + '://' + req.get('host')
    // const { name, gst, point, commission } = req.body;
    upload(req, res, async (err) => {


        const newmainCategory = new BannerModel({
            photo: req.file.filename,
            cid: req.body.cid,
            transdate: req.body.transdate
        })
        newmainCategory.save().then(() => res.send({
            success: true,
            // data: res,
            message: "creatd successfully",
        })).catch((err) => {
            res.send({
                success: false,
                data: "internal server error",
                message: err.message,
            });
        })
        // const photoname = url + '/uploads/' + req.file.filename;
        //create a new MainCategory object and insert in DB
        // const response = await MainCategory.create({ name, gst, point, commission });
        //send a json response with a success flag

    })
};



// test create category
const testcategory = async (req, res) => {
    const form = new Formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err) { return res.send({ success: false, data: 'something went wrong' }) }
        detectFileType.fromFile(files.photo.path, (err, results) => {
            const photoname = uuidv1() + "." + results.ext;
            const allowedImageType = ["jpg", "jpeg", "png"];
            if (!allowedImageType.includes(results.ext)) { return res.send({ success: false, data: 'file type not suppported' }) }
            return res.send({ success: true, data: 'inserted successfully' })
        })
    })
}

//Update Category

const updateBanner = async (req, res) => {
    try {
        const { id, photo, cid, transdate } = req.body;
        const mainCategory = await MainCategory.findByIdAndUpdate(
            { _id: id },
            { name, photo, photoname, gst, point, commission },
            { new: true }
        );

        if (!mainCategory) {
            return res.status(404).json({
                success: false,
                message: "No main category found with right Id",
            });
        }
        res.status(200).json({
            success: true,
            data: mainCategory,
            message: `Main category ${id} data updated successfully`,
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
///Delete api
const deleteBanner = async (req, res) => {
    try {
        const { id } = req.params;
        await BannerModel.findByIdAndDelete(id);
        res.json({
            success: true,
            message: "Main category deleted",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
        });
    }
};

module.exports = {
    getBanner,
    getBannerById,
    updateBanner,
    createBanner,
    deleteBanner,
    testcategory
};
