class ApiError {
    constructor(statusCode, msg) {
        this.statusCode = statusCode;
        this.msg = msg
    }
    static newError(status, msg){
        return new ApiError(status, msg)
    }
}


module.exports = ApiError;