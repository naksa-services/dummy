const VendorProduct = require("../models/vendorProductModel");
const multer = require('multer');
const csv = require('csvtojson');

const Storage = multer.diskStorage({
    destination: './uploads/csv',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
});

const upload = multer({
    storage: Storage,

}).single('csv');


const createVendorProductWithCsv = async (req, res) => {
    try {
        //extract title and desxcription from reauest body
        upload(req, res, async (err) => {
            //create a new VendorProduct Obj and insert in DB

            var productData = [];
            csv().fromFile(req.file.path).then(async(response) => {
                for (var x = 0; x < response.length; x++) {
                    productData.push({
                        pname: response[x].pname,
                        pimage: response[x].pimage,

                        vcatid: response[x].vcatid,
                        stock: response[x].stock,
                        price: response[x].price,
                        est_price: response[x].est_price,
                        pdesc: response[x].pdesc,
                        product_cat: response[x].product_cat,
                        must_try:response[x].must_try,
                        best_seller: response[x].best_seller,
                        // variable_product: response[x].,
                    });
                }
                console.log(productData);
                await VendorProduct.insertMany(productData);

            })
            res.send({sts:true, data:"file uploaded"});

        });
    } catch (err) {
        console.error(err);
        const error = new Error(err.message);
        error.statusCode = 500;
        throw error;
    }
};


const PrescriptionStorage = multer.diskStorage({
    destination: './uploads/prescription',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
});

const uploadPres = multer({
    storage: PrescriptionStorage,

}).single('prescription');

const uploadPrescription = async (req,res) =>{
    try{
        uploadPres(req, res, async (err) => {
            
        });
    }
    catch (e){
        res.send({sts:false, data:err});
    }
}


module.exports = {
    createVendorProductWithCsv
};

