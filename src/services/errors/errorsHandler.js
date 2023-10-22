import CustomeError from "./customeError.js";

export default function errorHandler(err, req, res, next){
    if (err instanceof CustomeError){
        console.log("Error personalizado capturado: ", err);
        res.status(Number.isInteger(err.code) ? err.code : 500).json({
            error:{
                code: err.code || 500,
                message: err.message || "Error interno",
                cause: err.cause || null, 
            }
        })
    } else {
        console.error("Error no manejado capturado:", err);
        res.status(500).json({
            error:{
                code: 500,
                message: "Error interno",
                cause: err,
            }
        })
    }
}