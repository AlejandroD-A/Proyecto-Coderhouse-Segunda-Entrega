const logger = require("../logger")
const { sendEmailError } = require("../messaging/mail")


module.exports = async (error, req, res, next) => {

    logger.warn(error.message, error)
    await sendEmailError(error)
    
    return res.status(500).json({ error : 'Ha ocurrido un Error' })
}