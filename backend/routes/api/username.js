const express = require("express");
const asyncHandler = require("express-async-handler");

const { User } = require("../../db/models");

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const { username } = req.params
    const profile = User.findOne({
      where: { username }
    })
    console.log('in username.js api', profile)
    return res.json({profile})
  })
)

module.exports = router;
