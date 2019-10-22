
//////////////////////////////////////////
///   api endpoints for managing users //
////////////////////////////////////////

const router = require('express').Router();
let User = require('../models/user.model');

// Your Challenge: Make rwo routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. get all users on record
// GET: /
// ========================================
router.get('/', async (req, res) => {
    const user = await User.find({})
    res.json(user)
 
})

// 2. add a new user
// POST /add
// ========================================
  // router.post("/add", async (req, res) => { 
  //   User.insertOne(req.body, (error, data) => {   
  //     if (error) {
  //       res.send(error);
  //     } else {
  //       res.send(data.ops[0]);
  //     }
  //   });
  // });
  router.post('/add', async ({body}, res) => {
      User.create(body)
      .then(dbUsers => {
        res.json(dbUsers)
      })
  .catch(err => {
    res.json(err)
  })

  })


module.exports = router;