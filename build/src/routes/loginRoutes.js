"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const form = `
	<form method="POST">
		<div>
			<label>Email</label>
			<input name="email" />
		</div>
		<div>
			<label>Password</label>
			<input name="password"/>
		</div>
	</form>
`;
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    res.send('this here');
});
router.get('/login', (req, res) => {
    res.send(`<form method="POST">
		<div>
			<label>Email</label>
			<input name="email" />
		</div>
		<div>
			<label>Password</label>
			<input name="password"/>
		</div>
	</form>`);
});
