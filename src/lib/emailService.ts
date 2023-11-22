import nodemailer from "nodemailer";
import { GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD } from "$env/static/private";

console.log(GOOGLE_EMAIL)
let transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: GOOGLE_EMAIL,
		pass: GOOGLE_EMAIL_PASSWORD,
	},
});

transporter.verify(function(error) {
	if (error) {
		console.error(error);
	} else {
		console.log("Server is ready to take our messages");
	}
});

export default transporter;
