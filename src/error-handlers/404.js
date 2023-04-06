function handle404(req, res, next) {
  if (!res.headersSent) {
    res.status(404).json({ error: 'Not Found' });
  } else {
    next();
  }
}

module.exports = handle404;
