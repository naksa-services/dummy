//import the model
const cartModel = require("../models/cartModel");
const Cart = require("../models/cartModel");

//define route handler
const createCartModel = async (req, res) => {
  try {
    //extract title and desxcription from reauest body
    const cart_obj = new cartModel({
      customer_id: req.body.customer_id,
      vendor_id: req.body.vendor_id,
      store_id: req.body.store_id,
      product_id: req.body.product_id,
      quantity: req.body.quantity,
      price: req.body.price
    })

    const cartData = await Cart.find({});
    if (cartData.length >= 1) {
      if (cartData[0].store_id != req.body.store_id) {
        await Cart.deleteMany({ customer_id: req.body.customer_id });
        cart_obj.save().then(() => res.send({
          success: true,
          // data: cartData,
          message: "deleted & creatd successfully",
        }))
          .catch((err) => {
            res.send({
              success: false,
              data: "internal server error",
              message: err.message,
            });
          })
      }
      else {
        cart_obj.save().then(() => res.send({
          success: true,
          // data: cartData,
          message: "creatd successfully",
        }))
          .catch((err) => {
            res.send({
              success: false,
              data: "internal server error",
              message: err.message,
            });
          })
      }
    }
    // console.log(cartData);

    //send a json response with a success flag

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

const deleteCartModel = async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    // await Customer.deleteOne({_id: new mongoose.Types.ObjectId(email)});
    res.json({
      success: true,
      message: "Cart deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

const getCartModel = async (req, res) => {
  try {
    const carts = await Cart.find({});
    res.status(200).json({
      success: true,
      data: carts,
      message: "get of Data Successfully",
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

const getCartModelById = async (req, res) => {
  try {
    const id = req.params.id;
    const cart = await Cart.find({ customer_id: id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "No data find right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: cart,
      message: `Cart ${id} data fetch successfuly`,
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

const updateCartModel = async (req, res) => {
  try {
    const { id, increDecre } = req.body;

    const cart = await Cart.findById(
      { _id: id }

    );
    if (!cart) {
      res.send({ data: "ID not found", status: false });
    }
    if (increDecre == "add") {


      const ndata = await Cart.findByIdAndUpdate({ _id: id }, { quantity: cart.quantity + 1 },
        { new: true })
      res.send({ status: true, data: "quantity updated successfully" });
    }
    else if (increDecre == "remove") {
      if (cart.quantity == 1) {
        const ndata = await Cart.findByIdAndDelete(id)
        res.send({ data: "product deleted successfully", status: true });
      }
      else {
        const ndata = await Cart.findByIdAndUpdate({ _id: id }, { quantity: cart.quantity - 1 },
          { new: true })
        res.send({ status: true, data: "quantity updated successfully" });
      }
    }
    else {
      res.send({ status: false, data: "something went wrong!.." });
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
};

module.exports = {
  createCartModel,
  deleteCartModel,
  getCartModel,
  getCartModelById,
  updateCartModel,
};
