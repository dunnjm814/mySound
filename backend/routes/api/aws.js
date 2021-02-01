const {
  singlePublicFileUpload,
  singleMulterUpload,
} = require("../../../backend/awsS3");
const db = require('../../db/models')
const express = require('express')
const asyncHandler = require('express-async-handler')
const {User} = db
const router = express.Router()

router.put(
  "/profPicUpload",
  singleMulterUpload("file"),
  asyncHandler(async (req, res) => {
    const { userId } = req.body
    const profImg = await singlePublicFileUpload(req.file);
    const updatedProfPic = await User.findByPk(userId)
    const newProfPic = await updatedProfPic.update({profilePic: profImg})

    return res.json({ newProfPic });
  })
);

router.put(
  '/bannerPicUpload',
  singleMulterUpload('file'),
  asyncHandler(async (req, res) => {
    const { userId } = req.body
    const banPic = await singlePublicFileUpload(req.file)
    const bannerUser = await User.findByPk(userId)
    const newBanPic = await bannerUser.update({ bannerPic: banPic })

    return res.json({newBanPic})
  })
)
module.exports = router
