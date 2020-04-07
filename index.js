const app = require('./app.js')

app.listen(process.env.PORT || 3000, function() {
	console.log("Events page running!");
});
