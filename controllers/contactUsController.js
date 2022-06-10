const ContactUs = require("../models").ContactUs


const create = async (req,res) => {
    try {
        const {} = req.body
    }catch (e) {
        console.log("something went wrong",e)
    }
}

module.exports = {
    create
}