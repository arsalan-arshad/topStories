const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const storyRoute = express.Router();
const axios = require('axios');

const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use('/topStories', storyRoute);

storyRoute.route('/').get(function (req, res) {
	axios({
		method: 'get',
		url: 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=SOECmcOIPUXtX3LEv55RFYcociE5KKgt'
	}).then(function (result) {
		res.json({ result: result.data.results });
	});
});

app.listen(PORT, function () {
	console.log('Server is running on Port: ' + PORT);
});
