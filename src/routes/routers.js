const express = require("express");
const authController = require("../controllers/authController");
const { catchErrors } = require("../handlers/errorHandlers");

const router = express.Router();

router.route('/').get(catchErrors(authController.index));
router.route('/login').get(catchErrors(authController.login));
router.route('/register').get(catchErrors(authController.register));

module.exports = router;