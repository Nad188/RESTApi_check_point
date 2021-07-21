const express = require("express");
const router = express.Router();
const User = require("../models/user");

//   POST :  ADD A NEW USER TO THE DATABASE

router.post("/", (req, res) => {
  let newUser = new User({ ...req.body });
  newUser
    .save()
    .then((users) => res.status(200).json(users))
    .catch((err) => console.log("err", err));
});

//        GET :  RETURN ALL USERS

router.get("/", (req, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => console.log("err", err));
});

// PUT : EDIT A USER BY ID

router.put("/:_id", (req, res) => {
  let { _id } = req.params;
  User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
    .then(res.send("the user has been updated"))
    .catch((err) => console.log("err", err));
});

//  DELETE : REMOVE A USER BY ID

router.delete("/:_id", (req, res) => {
  let { _id } = req.params;
  User.findByIdAndRemove({ _id })
    .then(res.send("the user has been removed"))
    .catch((err) => console.log("err", err));
});
module.exports = router;
