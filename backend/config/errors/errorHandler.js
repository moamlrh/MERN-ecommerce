const errorHandler = (err, req, res, next) => {
    return res.status(err.statusCode).json({
        msg: err.msg,
    })
}

module.exports = errorHandler