const express = require("express");
const asyncHandler = require("express-async-handler");

const { User } = require("../../db/models");

const router = express.Router();

router.get(
  '/:username',
  asyncHandler(async (req, res) => {

    const { username } = req.params

    const profile = await User.findOne({
      where: { username }
    })
  
    return res.json({profile})
  })
)

module.exports = router;
