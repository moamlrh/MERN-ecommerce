const errorHandler = (err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        msg: err.msg,
    })
}

module.exports = errorHandler