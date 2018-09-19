const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (activities) {

  const router = express.Router();

  router.get('/', (req,res) => {
    activities
    .find()
    .toArray()
    .then((docs) => {
      res.json(docs)
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  router.get('/:id', (req,res) => {
    const id = req.params.id;
    activities
    .find({_id: ObjectID(id)})
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  router.post('/', (req, res) => {
    const newData = req.body;
    activities
    .insertOne(newData)
    .then(() => {
      activities
      .find().toArray()
      .then((docs) => {
        res.json(docs)
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err })
      });

    });

  });

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    activities
      .updateOne(
        {_id: ObjectID(id)},
        {$set: updatedData}
      )
      .then(() => {
        activities
        .find()
        .toArray()
        .then((docs) => res.json(docs));
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
    });


  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    activities
    .deleteOne({ _id: ObjectID(id) })
    .then(() => {
      activities
      .find()
      .toArray()
      .then((docs) => res.json(docs));
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });
  return router;
};

module.exports = createRouter;
