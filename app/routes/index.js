const priceRoutes = require('./price_routes');

module.exports = (app, db, ObjectID) => {

    app.get('/', (req, res) => {
        res.send('Welcome! This is API root page.');
    });

    priceRoutes(app, db, ObjectID);
};