const googleIsAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }

    return res.redirect('/api/google/failed')
}

const googleIsUnauthenticated = (req, res, next) => {
    if (req.isUnauthenticated()) {
        return res.redirect('/api/google/failed')
    }

    return next();
}

export { googleIsAuthenticated, googleIsUnauthenticated }