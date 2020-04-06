var express = require("express"),
	bodyParser	= require("body-parser"),
	exphbs = require("express-handlebars"),
	nodemailer = require("nodemailer"),
	app = express();

app.use(express.static(__dirname + "/public"));
// app.use(express.static(path.join(__dirname,"public")));

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
	res.render("events.ejs");
});

app.get("/register", function(req, res) {
	// res.send("REGISTER");
	res.render("contact");
});

app.post("/send", function(req, res) {
	console.log("SENT!");
	
	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false, // true for 465, false for other ports
		// service: 'gmail',
		auth: {
			user: '#',
			pass: '#'
    	},
    	tls:{
    	rejectUnauthorized:false
    	}
  	});

    // setup email data with unicode symbols
	let mailOptions = {
        from: '"ACM" <email@address>', // sender address
        to: 'req.body.email', // list of receivers
        subject: 'req.body.event', // Subject line
        text: 'Welcome to the event. The schedule is.... ', // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        // console.log('Message sent: %s', info.messageId);   
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
		res.render('contact', {msg:'Email has been sent'});
    });
});

app.listen(process.env.PORT || 3000, function() {
	console.log("Events page running!");
})
