const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

// backend router test code
// router.post("/test", function (req, res) {
//   res.json({ requestBody: req.body });
// });

module.exports = router;
