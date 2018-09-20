module.exports = (app, db, ObjectID) => {

    app.route('/api/price')
        .get((req, res) => {
            /* Get all price */
            db.collection('nails-price').find().toArray((err, result) => {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.send(result);
            });
        })
        .post((req, res) => {
            db.collection('nails-price').insertOne({
                decade: req.body.decade,
                artist: req.body.artist,
                song: req.body.song,
                weeksAtOne: req.body.weeksAtOne
            }, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.sendStatus(200);
            });
        });

    app.route('/api/price/:id')
        .get((req, res) => {
            db.collection('nails-price').findOne({ _id: ObjectID(req.params.id) }, (err, item) => {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.send(item);
            });
        })
        .put((req, res) => {
            /* Update one line by ID */
            db.collection('nails-price').updateOne(
                {_id: ObjectID(req.params.id)},
                {
                    $set: {
                        decade: req.body.decade,
                        artist: req.body.artist,
                        song: req.body.song,
                        weeksAtOne: req.body.weeksAtOne
                    }
                }, (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.sendStatus(500);
                    }
                    res.sendStatus(200);
                }
            );
        })
        .delete((req, res) => {
            /* Delete one line by ID */
            db.collection('nails-price').deleteOne({_id: ObjectID(req.params.id)}, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.sendStatus(200);
            });
        })
};