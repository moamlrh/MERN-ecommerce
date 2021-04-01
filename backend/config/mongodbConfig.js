const mongoose = require('mongoose')


module.exports = async (url) => {
    try {
        const db = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        return 'connected to db'
    } catch (error) {
        console.log(error)
    }
}