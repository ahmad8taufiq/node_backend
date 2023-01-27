const body = (success, message, data) => {
    return {
        success,
        message,
        data
    }
}
const response = (res, status, body) => {
    return res.status(status).json({
        success: body.success,
        message: body.message,
        data: body.data
    })
}

export { body, response }