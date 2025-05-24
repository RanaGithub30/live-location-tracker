/**
 * It's a wrapper function that helps you catch async errors in Express routes without writing try-catch everywhere.
*/

exports.catchErrors = (fn) => {
    return function(req, res, next) {
        const resp = fn(req, res, next); // Call the original function
        if (resp instanceof Promise) {
            resp.catch(next); // Catch async errors and pass to Express error handler
        }
    }
}

/**
 * Handles 404 errors by rendering a 404 page
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
*/

exports.notfound = (req, res) => {
    res.status(404).render('errors/404');
}