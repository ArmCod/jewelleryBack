const Product = require("../models").Product
const Order = require("../models").Order

const create = async (req, res) => {
    try {
        const {
            name,
            phone,
            text,
            productId
        } = req.body

        const newOrder = await Order.create({
            name,
            phone,
            text,
            productId
        })
    } catch (e) {
        console.log('something went wrong')
    }
}


const getAll = async (req, res) => {
    try {
        const offset = Number.parseInt(req.query.offset) || 0;
        const limit = Number.parseInt(req.query.limit) || 2;
        const allPosts = await Order.findAll({
            offset: offset * limit,
            limit,
            include: [Product]
        })
        const all = await Order.findAll()

        return res.json({posts: allPosts, count: all.length})
    } catch (e) {
        console.log('something went wrong')
    }
}

const deleteOrder = async (req, res) => {
    try {
        const {id} = req.body

        await Order.destroy({where:{id}})
    } catch (e) {
        console.log('something went wrong')
    }
}

module.exports = {
    create,
    getAll,
    deleteOrder
}
