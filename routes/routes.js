const express = require("express");
const router = express.Router();



//cartModel controller
const {
  createCartModel,
  getCartModel,
  getCartModelById,
  deleteCartModel,
  updateCartModel,
} = require("../controllers/cartModelController");


const {
  createSupport,
  getSupport,
  getSupportByvendorPhone,
  deleteSupport,
  updateSupportStatus,
} = require("../controllers/SupportController");
//cartProduct controller
const {
  createCartProduct,
  getCartProduct,
  getCartProductById,
  deleteCartProduct,
  updateCartProduct,
  // increaseCartProductQuantity,
  // decreaseCartProductQuantity,
  increaseDecreaseQuantity
} = require("../controllers/cartProductController");

//productimage controller
const {
  createProductImage,
  getProductImage,
  getProductImageById,
  deleteProductImage,
  updateProductImage,
} = require("../controllers/productImageController");

//Producttag controller
const {
  createProductTag,
  getProductTag,
  getProductTagById,
  deleteProductTag,
  updateProductTag,
} = require("../controllers/productTagController");

//vendorcategory controller
const {
  createVendorCategory,
  getVendorCategory,
  getVendorCategoryById,
  deleteVendorCategory,
  updateVendorCategory,
  getVendorCategoryByStoreID
} = require("../controllers/vendorCategoryController");

//vendorProductModel controller
const {
  createVendorProduct,
  getVendorProduct,
  getVendorProductById,
  deleteVendorProduct,
  updateVendorProduct,
} = require("../controllers/vendorProductController");
const {
  getBanner,
  getBannerById,
  updateBanner,
  createBanner,
  deleteBanner,
  // testcategory
} = require("../controllers/BannerController");


//customer controller

const {
  // createCustomer,
  getCustomer,
  getCustomerById,
  deleteCustomer,
  updateCustomer,
  customerRegistration,
  optVerfication,
  createCustomerProfile,
  getAllCustomer
} = require("../controllers/customerController");


const {
  createCustomerAddress, deleteCustomerAddress, getCustomerAddress, getCustomerAddressById, updateCustomerAddress

} = require("../controllers/customerAddressController")


//admin controller
const {
  createAdmin,
  getAdmin,
  getAdminById,
  deleteAdmin,
  updateAdmin,
  adminLogin
} = require("../controllers/adminController");


//role controller
const {
  createRole,
  getRole,
  getRoleById,
} = require("../controllers/roleController");

// vendor controller
const {
  createVendor,
  getVendor,
  vendorOptVerfication,
  getVendorById,
  deleteVendor,
  updateVendor,
} = require("../controllers/vendorController");

// vendor bank details controller
const {
  createVendorBankDetails,
  getVendorBankDetails,
  getVendorBankDetailsById,
  deleteVendorBankDetails,
  updateVendorBankDetails,
} = require("../controllers/vendorBankDetailsController");

// vendor documents controller
const {
  createVendorDocument,
  getVendorDocument,
  getVendorDocumentById,
  deleteVendorDocument,
  updateVendorDocument,
} = require("../controllers/vendorDocumentsController");

// vendor store controller
const {
  createVendorStore,
  getVendorStore,
  getVendorStoreById,
  deleteVendorStore,
  getVendorStoreWithVendor,
  updateVendorStore,
} = require("../controllers/vendorStoreController");

// main categ. controller
const {
  createMainCategory,
  getMainCategory,
  getMainCategoryById,
  deleteMainCategory,
  updateMainCategory,
  testcategory
} = require("../controllers/mainCategoryController");


const {
  createRatingReview,
  getRatingReview,
  getRatingReviewById,
  deleteRatingReview,
  updateRatingReviewModel
} = require("../controllers/StoreRatingReviewController");


const {
  createVendorWallet,
  getVendorWallet,
  getVendorWalletById,
  deleteVendorWallet,
  updateVendorWallet,
} = require("../controllers/VendorWalletController");

const {
  createCustomerPoints,
  getCustomerPoints,
  getCustomerPointsById,
  deleteCustomerPoints,
  updateCustomerPoints,
} = require("../controllers/CustomerPointsController");

const {
  createCoupon,
  getOffer,
  getOfferByVendorStore,
  deletOffer,
  updateOffer,
} = require("../controllers/CouponController");


const {
  createCustomerOrder,
} = require("../controllers/CustomerOrderController");

const { createVendorProductWithCsv } = require("../controllers/csvController");


const { paymentReceipt, postPayment } = require('../controllers/paymentController');
const { loginVendor } = require("../controllers/loginController");

//define APi routes

router.post("/loginVendor", loginVendor);

// customer profile 
router.post("/createCustomerProfile", createCustomerProfile);
router.get("/getCustomer/:phone", getCustomer);
router.get("/getAllCustomer", getAllCustomer);
router.get("/getCustomer/:id", getCustomerById);
router.delete("/deleteCustomer/:id", deleteCustomer);
router.post("/customerRegistration", customerRegistration)
router.post("/optVerfication", optVerfication)

router.post("/create_customer_order", createCustomerOrder);
// banner route

router.post("/create_banner", createBanner);
router.get("/get_banner/:id", getBannerById);
router.get("/get_banner", getBanner);
router.delete("/delete_banner/:id", deleteBanner);
router.post("/update_banner", updateBanner)


// support route

router.post("/create_support", createSupport);
router.get("/get_support_vendor_phone/:id", getSupportByvendorPhone);
router.get("/get_support", getSupport);
router.delete("/delete_support/:id", deleteSupport);
router.put("/update_support_status", updateSupportStatus)


// coupon Route 

router.post("/create_offer", createCoupon);
router.get("/get_offer/:id", getOffer);
router.get("/get_offer_vendor_store", getOfferByVendorStore);
router.delete("/delete_offer/:id", deletOffer);
router.put("/update_offer", updateOffer)



//customer address
router.post("/createCustomerAddress", createCustomerAddress)
router.get("/getCustomerAddress", getCustomerAddress);
router.get("/getCustomerAddress/:id", getCustomerAddressById);
router.delete("/deleteCustomerAddress/:id", deleteCustomerAddress);

//role
router.post("/createRole", createRole);
router.get("/getRole", getRole);
router.get("/getRole/:id", getRoleById);

//vendor
router.post("/createVendor", createVendor);
router.post("/vendor_otp_varification", vendorOptVerfication);
router.get("/getVendor", getVendor);
router.get("/getVendor/:id", getVendorById);
router.delete("/deleteVendor/:id", deleteVendor);
router.delete("/updateVendor", updateVendor);

//vendorBankDetils
router.post("/createVendorBankDetails", createVendorBankDetails);
router.get("/getVendorBankDetails", getVendorBankDetails);
router.get("/getVendorBankDetails/:id", getVendorBankDetailsById);
router.delete("/deleteVendorBankDetails/:id", deleteVendorBankDetails);
router.delete("/updateVendorBankDetails", updateVendorBankDetails);

//vendor document
router.post("/createVendorDocument", createVendorDocument);
router.post("/updateVendorDocument", updateVendorDocument);
router.get("/getVendorDocument", getVendorDocument);
router.get("/getVendorDocument/:id", getVendorDocumentById);
router.delete("/deleteVendorDocument/:id", deleteVendorDocument);

//vendor Store
router.post("/createVendorStore", createVendorStore);
router.get("/getVendorStore", getVendorStore);
router.get("/getVendorStorewithVendor/:vid", getVendorStoreWithVendor);
router.get("/getVendorStore/:id", getVendorStoreById);
router.delete("/deleteVendorStore/:id", deleteVendorStore);
router.delete("/updateVendorStore", updateVendorStore);

// admin Controller
router.post("/createAdmin", createAdmin);
router.get("/getAdmin", getAdmin);
router.get("/getAdmin/:id", getAdminById);
router.delete("/deleteAdmin/:id", deleteAdmin);
router.post("/adminLogin/", adminLogin);

//main category
router.post("/create_main_category", createMainCategory);
router.post("/create_test_category", testcategory);
router.get("/get_main_category", getMainCategory);
router.get("/getMainCategory/:id", getMainCategoryById);
router.delete("/deleteMainCategory/:id", deleteMainCategory);


//cartModel
router.post("/addtocart", createCartModel);
router.get("/getCart", getCartModel);
router.get("/getCartByUser/:id", getCartModelById);
router.put("/updateCartQuantity", updateCartModel);
router.delete("/deleteCartModel/:id", deleteCartModel);

//cartProduct
router.post("/createCartProduct", createCartProduct);
router.get("/getCartProduct", getCartProduct);
router.get("/getCartProduct/:id", getCartProductById);
router.delete("/deleteCartProduct/:id", deleteCartProduct);




// csv controller
router.post("/uploadCsvFile", createVendorProductWithCsv);

//productimage
router.post("/createProductImage", createProductImage);
router.get("/getProductImage", getProductImage);
router.get("/getProductImage/:id", getProductImageById);
router.delete("/deleteProductImage/:id", deleteProductImage);

//Producttag
router.post("/createProductTag", createProductTag);
router.get("/getProductTag", getProductTag);
router.get("/getProductTag/:id", getProductTagById);
router.delete("/deleteProductTag/:id", deleteProductTag);

//vendorcategory
router.post("/createVendorCategory", createVendorCategory);
router.get("/getVendorCategory", getVendorCategory);
router.get("/getVendorCategory/:id", getVendorCategoryById);
router.delete("/deleteVendorCategory/:id", deleteVendorCategory);
router.delete("/updatevendorCategory", updateVendorCategory);
router.get("/getCategoryByStore", getVendorCategoryByStoreID);

//vendorProductModel
router.post("/createVendorProduct", createVendorProduct);
router.get("/getVendorProduct", getVendorProduct);
router.get("/getVendorProduct/:id", getVendorProductById);
router.delete("/deleteVendorProduct/:id", deleteVendorProduct);


// paytm payment gateway
router.post("/post_payment", postPayment);
router.post("/payment_receipt", paymentReceipt);


// rating review route

router.post("/createRatingReview", createRatingReview);
router.get("/getRatingReview", getRatingReview);
router.get("/getRatingReview/:id", getRatingReviewById);
router.delete("/deleteRatingReview/:id", deleteRatingReview);
router.put("/updateRatingReview", updateRatingReviewModel);


// vendor wallet route


router.post("/createVendorWallet", createVendorWallet);
router.get("/getVendorWallet", getVendorWallet);
router.get("/getVendorWallet/:id", getVendorWalletById);
router.delete("/deleteVendorWallet/:id", deleteVendorWallet);
router.put("/updateVendorWallet", updateVendorWallet);


// customer points route
router.post("/createCustomerPoints", createCustomerPoints);
router.get("/getCustomerPoints", getCustomerPoints);
router.get("/getCustomerPoints/:id", getCustomerPointsById);
router.delete("/deleteCustomerPoints/:id", deleteCustomerPoints);
router.put("/updateCustomerPoints", updateCustomerPoints);



//update routes
router.put("/updateAdmin", updateAdmin);
router.put("/updateCustomer", updateCustomer);
router.put("/updateCustomerAddress", updateCustomerAddress);
router.put("/updateVendor", updateVendor);
router.put("/updateVendorBankDetails", updateVendorBankDetails);
router.put("/updateVendorDocument", updateVendorDocument);
router.put("/updateVendorStore", updateVendorStore);
router.put("/updateMainCategory", updateMainCategory);
router.put("/updateCartModel", updateCartModel);
router.put("/updateCartProduct", updateCartProduct);
router.put("/updateProductImage", updateProductImage);
router.put("/updateProductTag", updateProductTag);
router.put("/updateVendorCategory", updateVendorCategory);
router.put("/updateVendorProduct", updateVendorProduct);
router.put("/increaseDecreaseQuantity/:path", increaseDecreaseQuantity);


module.exports = router;
