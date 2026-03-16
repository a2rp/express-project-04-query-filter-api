const express = require("express");
const router = express.Router();

const { getFilteredUsers } = require("../controllers/user.controller");

router.get("/users", getFilteredUsers);

module.exports = router;
