const express = require('express')
const { createproduct, getallproduct, getproductbyid, updateproduct, deleteproduct } = require('../Controller/productcontroller')
const router = express.Router()


router.post('/create',createproduct)
router.get('/',getallproduct)
router.post('/get/:product_id',getproductbyid)
router.post('/update/:product_id',updateproduct)
router.delete('/:product_id',deleteproduct)

module.exports =router