const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.json([
		{
			name: "Issa",
			email: "issagw@gmail.com",
		},
	]);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
