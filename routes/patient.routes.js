const router = require('express').Router()
const Patient = require('../models/Patients.model')

router.post('/', async (req, res) => {
	const { personalInformation, howDidYouMeetUs, historyAndDentalHealthData } = req.body
	const { name } = personalInformation
	const namePatient = name
	if (name) {
		try {
			const patient = await Patient.findOne({
				personalInformation: {
					name: namePatient,
				},
			})
			if (!patient) {
				Patient.create({ personalInformation, howDidYouMeetUs, historyAndDentalHealthData })
					.then((data) => {
						return res.status(200).json(data)
					})
					.catch((error) => {
						return res.status(502).json(error)
					})
			} else {
				return res.status(501).json('patient exist')
			}
		} catch (error) {
			return res.status(500).json(error)
		}
	} else {
		res.status(422).json('name necesary')
	}
})

// router.get('/:id', async (req, res) => {
// 	const { id } = req.params
// 	try {
// 		const product = await Product.findById(id)
// 		return !product
// 			? res.status(402).json('Product not found')
// 			: res.status(200).json(product)
// 	} catch (error) {
// 		return res.status(500).json(error)
// 	}
// })

module.exports = router
