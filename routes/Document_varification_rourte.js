const express = require("express");
const router = express.Router();



//cartModel controller
const {
    PanVarification,
    DrivingLicenseVerification,
    AaadharVarification,
    GSTVarification,
    FSSAIVarification
} = require("../controllers/DocumentVarificationController");
                   
router.post("/verify_pan_card", PanVarification);
router.post("/verify_driving_license", DrivingLicenseVerification);
router.post("/verify_aadhar", AaadharVarification);
router.post("/verify_gst", GSTVarification);
router.post("/verify_fssai_license", FSSAIVarification);
router.post("/verify_gst", GSTVarification);

module.exports = router;