const { model } = require("mongoose");
const CustomerPoints = require("../models/CustomerPoints");
var axios = require('axios');
const sleep = ms => new Promise(res => setTimeout(res, ms));
const PanVarification = async (req, res) => {
    const pancard_number = req.body.pannumber;

    var data = JSON.stringify({
        "task_id": "74f4c926-250c-43ca-9c53-453e87ceacd1",
        "group_id": "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
        "data": {
            "id_number": pancard_number
        }
    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://eve.idfy.com/v3/tasks/async/verify_with_source/ind_pan',
        headers: {
            'Content-Type': 'application/json',
            'account-id': process.env.Account_ID,
            'api-key': process.env.API_KEY
        },
        data: data
    };

    axios(config)
        .then(async function (response) {
            await sleep(3000);
            console.log("nkbnk");
            console.log(response.data.request_id);
            var config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://eve.idfy.com/v3/tasks?request_id=${response.data.request_id}`,
                headers: {
                    'Content-Type': 'application/json',
                    'account-id': process.env.Account_ID,
                    'api-key': process.env.API_KEY
                },

            };

            axios(config)
                .then(function (response) {
                    res.send({ status: response.data[0].status, data: response.data[0].result })
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
        .catch(function (error) {
            console.log(error);
        });
}

const DrivingLicenseVerification = async (req, res) => {
    const dl_number = req.body.dlnumber;
    const dob = req.body.dob;

    var data = JSON.stringify({

        "task_id": "74f4c926-250c-43ca-9c53-453e87ceacd1",
        "group_id": "8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e",
        "data":
        {
            "id_number": dl_number,
            "date_of_birth": dob,
            "advanced_details":
            {
                "state_info": true, // state comes as seperate field in response
                "age_info": true  // is_minor in the response field in response
            }

        }

    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://eve.idfy.com/v3/tasks/async/verify_with_source/ind_driving_license',
        headers: {
            'Content-Type': 'application/json',
            'account-id': process.env.Account_ID,
            'api-key': process.env.API_KEY
        },
        data: data
    };

    axios(config)
        .then(async function (response) {
            await sleep(3000);
            console.log("nkbnk");
            console.log(response.data.request_id);
            var config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://eve.idfy.com/v3/tasks?request_id=${response.data.request_id}`,
                headers: {
                    'Content-Type': 'application/json',
                    'account-id': process.env.Account_ID,
                    'api-key': process.env.API_KEY
                },

            };

            axios(config)
                .then(function (response) {
                    res.send({ status: response.data[0].status, data: response.data[0].result })
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
        .catch(function (error) {
            console.log(error);
        });
}


module.exports = { PanVarification, DrivingLicenseVerification }