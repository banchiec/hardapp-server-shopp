import { Request, Response, Router } from 'express'

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
`

const router = Router()
router.get('/', (req: Request, res: Response) =>{
	res.send('this here')
})

router.get('/login', (req: Request, res: Response) =>{
	res.send(
		`<form method="POST">
		<div>
			<label>Email</label>
			<input name="email" />
		</div>
		<div>
			<label>Password</label>
			<input name="password"/>
		</div>
		<button>Submit</button>
	</form>`
	)
})

router.post('/login', (req: Request, res: Response) =>{
	const body  = req.body
	console.log(body)
	res.send(body)
})
export { router }