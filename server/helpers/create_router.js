const express = require('express');
const ObjectId = require('mongodb').ObjectID;

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

  router.post('/', () => {
    
  })

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectID(id) })
      .then(() => {
        collection
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
return router
};

module.exports = createRouter;
