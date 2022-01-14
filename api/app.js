const express = require("express");
const next = require("next");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
	.then(() => {
		const app = express();
		// body parser fro app
		app.use(express.urlencoded({ extended: true }));
		app.use(express.json());
		app.use(cors());

		const API_ROOT = "api";

		const userRoutes = require("./routes/User/userRoutes");
		app.use(`/${API_ROOT}/users`, userRoutes);

		app.get("*", (req, res) => {
			return handle(req, res);
		});

		app.listen(PORT, (err) => {
			if (err) throw err;
			console.log(`> Ready on http://localhost:${PORT}/`);
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
