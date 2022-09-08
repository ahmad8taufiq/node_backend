const response = (res, body) => {
    return res.json({
        success: body.success,
        message: body.message,
        data: body.data
    })
}

module.exports = response