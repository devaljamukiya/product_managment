const Product = require("../Models/product")

const createproduct = async (req, res) => {
    try {

        const { name, description, price, stock } = req.body

        const CreateProduct = await Product.create({
            name,
            description,
            price,
            stock
        })
        res.json(CreateProduct)
    }
    catch (error) {
        res.json({ message: "product ceating error", error: error.message })
    }
}

const getallproduct = async (req, res) => {
    try {
        const product = await Product.findAll()
        res.json(product)
    }
    catch (error) {
        res.json({ message: 'getting error', error: error.message })
    }
}

const getproductbyid = async (req, res) => {
    try {
        const { product_id } = req.params
        const product = await Product.findByPk(product_id)
        res.json(product)

    }
    catch (error) {
        res.json({ message: 'finding error', error: error.message })
    }
}

const updateproduct = async (req, res) => {
    try {
        const { name, description, price, stock } = req.body
        const { product_id } = req.params
        const products = await Product.findByPk(product_id)
        const product = await products.update({
            name,
            description,
            price,
            stock

        })
        res.json(product)
    }
    catch (error) {
        res.json({ message: 'product updating error', error: error.message })
    }
}

const deleteproduct = async(req,res)=>{
    try{
        const { product_id } = req.params
        const product = await Product.findByPk(product_id)

        const deleteproduct = await product.destroy()
        res.json({message:'product delete succesfully',deleteproduct})
    }
    catch(error){
        res.json({message:'product deleting error',error:error.message})
    }
}


module.exports = {
    createproduct,
    getallproduct,
    getproductbyid,
    updateproduct,
    deleteproduct

}