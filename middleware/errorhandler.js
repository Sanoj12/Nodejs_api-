const {constants}=require("../constants")

const  errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:

            res.json({
                title: "vaildation failed",
                message: err.message,
                stackTrack: err.stack
            });

            break;
        case constants.UNAUTORIZED :
            res.json({
                title: "unauthorized",
                message: err.message,
                stackTrack: err.stack
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title:"Forbidden",
                message:err.message,
                stackTrack:err.stack
            });
        case constants.NOTFOUND:
            res.json({
                title:"Not Found",
                message:err.message,
                stackTrack:err.stack
            });
        case constants.SERVER_ERROR:
            res.json({
                title:"server error",
                message:err.message,
                stackTrack:err.stack
            })
        default:
            console.log("No error accesss!");
            break;
    }


};


module.exports = errorHandler;