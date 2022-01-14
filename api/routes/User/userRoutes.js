const express = require("express");

const router = express.Router();

const { sign } = require("jsonwebtoken");
const UserQuery = require("./userQuery");

router.get("/", UserQuery.getAllUser);

module.exports = router;
