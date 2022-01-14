const prisma = require("../../config/prisma");

const UserQuery = {
	getAllUser: async (req, res) => {
		const users = await prisma.user
			.findMany()
			.then((data) => {
				res.json({
					data: data,
				});
			})
			.catch((error) => {
				res.json({
					error: error,
					msg: "Failed",
				});
			});
	},
};

module.exports = UserQuery;
