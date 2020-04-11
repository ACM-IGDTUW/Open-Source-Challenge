const app = require('./app.js')

app.listen(process.env.PORT || 3000, function() {
	console.log("Events page running! Go to http://localhost:3000/ in your browser");
});
