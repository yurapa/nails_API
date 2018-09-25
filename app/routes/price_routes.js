module.exports = (app, db, ObjectID) => {

    const PRICE_COLLECTION = 'nails-price';

    app.route('/api/price')
        .get((req, res) => {
            /* Get all price */
            db.collection(PRICE_COLLECTION).find({}).toArray((err, result) => {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.send(result);
            });
        })
        .post((req, res) => {
            /* Add one service into the price */
            db.collection(PRICE_COLLECTION).insertOne({
                name: {
                    uk: req.body.name_uk,
                    ru: req.body.name_ru
                },
                price: {
                    min: req.body.price_min,
                    max: req.body.price_max
                },
                isBasicService: req.body.isBasicService,
                isVisible: req.body.isVisible
            }, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.sendStatus(200);
            });
        });

    app.route('/api/price/:id')
        /* GET one service from the price by id */
        .get((req, res) => {
            db.collection(PRICE_COLLECTION).findOne({ _id: ObjectID(req.params.id) }, (err, item) => {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.send(item);
            });
        })
        // .put((req, res) => {
        //     db.collection(PRICE_COLLECTION).updateOne(
        //         {_id: ObjectID(req.params.id)},
        //         {
        //             $set: {
        //                 decade: req.body.decade,
        //                 artist: req.body.artist,
        //                 song: req.body.song,
        //                 weeksAtOne: req.body.weeksAtOne
        //             }
        //         }, (err, result) => {
        //             if (err) {
        //                 console.log(err);
        //                 return res.sendStatus(500);
        //             }
        //             res.sendStatus(200);
        //         }
        //     );
        // })
        .delete((req, res) => {
            /* DELETE one service from the price by id */
            db.collection(PRICE_COLLECTION).deleteOne({_id: ObjectID(req.params.id)}, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.sendStatus(200);
            });
        })
};