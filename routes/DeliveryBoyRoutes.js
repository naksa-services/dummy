const express = require("express");
const router = express.Router();



//cartModel controller
const {
    deliveryBoyRegistration, deliveryBoyotpVerfication, createDeliveryBoyProfile, getDeliveryBoy, getDeliveryBoyprofile, getDeliveryBoybyID, updateDeliveryBoy, updateOnlineStatusDeliveryBoy, updateStatusDeliveryBoy
} = require("../controllers/DeliveryBoyController");

router.post("/delivery_boy_registration", deliveryBoyRegistration);
router.post("/delivery_boy_otp_verification", deliveryBoyotpVerfication);
router.post("/create_delivery_boy_profile", createDeliveryBoyProfile);
router.get("/get_delivery_boy", getDeliveryBoy);
router.get("/get_delivery_boy_phone/:phone", getDeliveryBoyprofile);
router.get("/get_delivery_boy_id/:id", getDeliveryBoybyID);
router.put("/update_delivery_boy", updateDeliveryBoy);
router.put("/update_online_status_db", updateOnlineStatusDeliveryBoy);
router.put("/update_status_db", updateStatusDeliveryBoy);

module.exports = router;