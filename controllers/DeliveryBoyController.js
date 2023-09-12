//import th model
const deliveryBoy = require('../models/DeliveryBoyModel');

const otpGenerator = require('otp-generator')
//define route handler

const deliveryBoyRegistration = async (req, res) => {
    try {
        const { phone } = req.body;
        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
        const creatUser = await deliveryBoy.findOne({ phone });
        if (!creatUser) {
            const newCustomer = await deliveryBoy.create({ phone, otp });

            res.status(200).json({
                success: true,
                phone: otp,
                message: "regiseterd successfully",
            });

        }
        else {
            const newCustomer = await deliveryBoy.updateOne({ phone: phone, otp: otp });


            res.status(200).json({
                success: true,
                phone: otp,
                message: "regiseterd successfully",
            });
        }



    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        });
    }
}

const deliveryBoyotpVerfication = async (req, res) => {

    //extract title and desxcription from reauest body
    const { otp, phone, mob_notification } = req.body;

    const user = await validateUserSignUp(phone, otp, mob_notification);
    res.send(user);

}
const validateUserSignUp = async (phone, otp, mob_notification) => {
    const user = await deliveryBoy.findOne({
        phone,
    });
    if (!user) {
        return [false, 'User not found'];
    }
    if (user && user.otp !== otp) {
        return [false, 'Invalid OTP'];
    }
    const updatedUser = await deliveryBoy.findByIdAndUpdate(user._id, {
        $set: { status: "inactive", mob_notification: mob_notification },
    });
    return [true, updatedUser,];
}
const createDeliveryBoyProfile = async (req, res) => {

    const { name, email, phone, } = req.body;
    const user = await updateDeliveryBoyProfile(phone, name, email);
    res.send(user);
};

const updateDeliveryBoyProfile = async (phone, name, email) => {
    const user = await deliveryBoy.findOne({
        phone,
    });
    if (!user) {
        return [false, 'User not found'];
    }

    const updatedUser = await deliveryBoy.findByIdAndUpdate(user._id, {
        $set: { name: name, email: email },
    });
    return [true, updatedUser];

}

const deleteDeliveryBoy = async (req, res) => {
    try {
        const { id } = req.params;
        await deliveryBoy.findByIdAndDelete(id);
        // await Customer.deleteOne({_id: new mongoose.Types.ObjectId(email)});
        res.json({
            success: true,
            message: "Delivery Boy deleted",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
        });
    }
};

const getDeliveryBoy = async (req, res) => {
    const customer = await deliveryBoy.findOne({});
    if (!customer) {
        res.send({ status: false, data: customer })
    } else {
        res.send({ status: true, data: customer })
    }


};
const getDeliveryBoyprofile = async (req, res) => {
    const phone = req.params.phone
    const customer = await deliveryBoy.findOne({ phone: phone });
    if (!customer) {
        res.send([false, "not found"])
    } else {
        res.send([true, customer])
    }


};


const getDeliveryBoybyID = async (req, res) => {
    try {
        const id = req.params.id;
        const customer = await deliveryBoy.findById({ _id: id });

        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "No data find right Id",
            });
        }
        res.status(200).json({
            success: true,
            data: customer,
            message: `Customer ${id} data fetch successfuly`,
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

const updateStatusDeliveryBoy = async (req, res) => {
    const { status, phone } = req.body;
    const user = await deliveryBoy.findOne({
        phone,
    });
    if (!user) {
        res.send({ status: false, data: "user not found" });
    }

    const updatedUser = await deliveryBoy.findByIdAndUpdate(user._id, {
        $set: { status: status },
    });
    if (updatedUser) {
        res.send({ status: true, data: "user updated successfully" });
    }
    else {
        res.send({ status: false, data: "something went wrong!.." });
    }
}


const updateOnlineStatusDeliveryBoy = async (req, res) => {
    const { isOnline, phone } = req.body;
    const user = await deliveryBoy.findOne({
        phone,
    });
    if (!user) {
        res.send({ status: false, data: "user not found" });
    }

    const updatedUser = await deliveryBoy.findByIdAndUpdate(user._id, {
        $set: { isOnline: isOnline },
    });
    if (updatedUser) {
        res.send({ status: true, data: "user status updated successfully" });
    }
    else {
        res.send({ status: false, data: "something went wrong!.." });
    }
}

const updateDeliveryBoy = async (req, res) => {
    try {
        const { id, name, email, phone, photo_url, role, mob_notification } =
            req.body;
        const customer = await deliveryBoy.findByIdAndUpdate(
            { _id: id },
            { name, email, phone, photo_url, role, mob_notification },
            { new: true }
        );

        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "No data found with right Id",
            });
        }
        res.status(200).json({
            success: true,
            data: customer,
            message: `Customer ${id} data updated successfully`,
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


const deliveryBoyDocumentVerification = async (req, res) => {
    try {
        const {
            pan,
            dl_number,
            aadharnumber,
            rcnumber,
            d_o_b,
            panstatus,
            aadharstatus,
            dlstatus,
            rcstatus,
            id

        } = re1.body;
        const customer = await deliveryBoy.findByIdAndUpdate(
            { _id: id },
            {
                pan,
                dl_number,
                aadharnumber,
                rcnumber,
                d_o_b,
                panstatus,
                aadharstatus,
                dlstatus,
                rcstatus
            },
            { new: true }
        );
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "No data found with right Id",
            });
        }
        res.status(200).json({
            success: true,
            // data: customer,
            message: `delivery boy data updated successfully`,
        });
    }
    catch (e) {
        res.status(200).json({
            success: false,
            // data: customer,
            message: `something went wrong.`,
        });
    }
}





module.exports = {
    deliveryBoyRegistration, deliveryBoyotpVerfication, createDeliveryBoyProfile, getDeliveryBoy, getDeliveryBoyprofile, getDeliveryBoybyID, updateDeliveryBoy, updateOnlineStatusDeliveryBoy, updateStatusDeliveryBoy
}
