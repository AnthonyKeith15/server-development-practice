function internalError(req, res, next) {
    req.status(500);
    res.json({
        error: '500 Error Code',
    });
}

module.exports = internalError;