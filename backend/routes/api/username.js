const express = require("express");
const asyncHandler = require("express-async-handler");

const { User } = require("../../db/models");

const router = express.Router();

router.get(
  '/:username',
  asyncHandler(async (req, res) => {
    console.log("%%%%%%%%", req.params)
    const { username } = req.params
      console.log("$$$$$$$$",username)
    const profile = await User.findOne({
      where: { username }
    })
    console.log("#########", profile)
    return res.json({profile})
  })
)

module.exports = router;
