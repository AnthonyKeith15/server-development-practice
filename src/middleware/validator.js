function validator(req, res, next) {
    const name = req.query.name;
    if (!name) {
        const error = new Error('Name is missing from query string');
        error.statusCode = 400;
        return next(error);
    }
    next();
}

module.exports = validator;
