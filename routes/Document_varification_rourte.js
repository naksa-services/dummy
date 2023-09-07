const express = require("express");
const router = express.Router();



//cartModel controller
const {
    PanVarification,
    DrivingLicenseVerification
} = require("../controllers/DocumentVarificationController");

router.get("/verify_pan_card", PanVarification);
router.get("/verify_driving_license", DrivingLicenseVerification);

module.exports = router;