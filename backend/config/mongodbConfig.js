const mongoose = require('mongoose')


module.exports = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        return 'connected to db'
    } catch (error) {
        console.log('-----'.repeat(32))
        console.log(error)
    }
}