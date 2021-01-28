const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const userPageRouter = require('./username.js')

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use('/:username', userPageRouter)

// backend router test code
// router.post("/test", function (req, res) {
//   res.json({ requestBody: req.body });
// });

module.exports = router;
