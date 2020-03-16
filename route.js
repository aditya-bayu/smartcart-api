const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router.route('/get-api').get(function(req, res) {
	console.log(req.body);
});

router.route('/post-api').post(function(req, res) {
	console.log(req.body.data);
	res.end();
});

module.exports = router;