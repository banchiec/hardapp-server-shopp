const { Schema, model } = require('mongoose')

const patientSchema = new Schema(
	{
		personalInformation: {
			name: {
				type: String,
				required: true,
			},
			dateOfBirth: {
				type: Date,
			},
			dniOrPassport: {
				type: String,
			},
			address: {
				type: String,
			},
			location: {
				type: String,
			},
			province: {
				type: String,
			},
			postalCode: {
				type: Number,
			},
			landline: {
				type: Number,
			},
			mobilePhone: {
				type: Number,
			},
			email: {
				type: String,
			},
			age: {
				type: String,
			},
			nationality: {
				type: String,
			},
		},
		howDidYouMeetUs: [
			{
				type: String,
				default: ['Buzoneo', 'Paseando', 'Internet', 'Recomendación', 'Email/Carta', 'Publicidad'],
			},
		],
		historyAndDentalHealthData: {
			approximateDateLastRevision: {
				type: Date,
			},
			approximateDateYourLastMouthCleaning: {
				type: Date,
			},
			historyNumber: {
				type: String,
			},
			somethingOfTheFollowingHappens: [
				{
					type: String,
					default: [
						'Dolor en diente',
						'Enrojecimiento o molestias en la encia',
						'Movilidad dentaria',
						'Supuración en los dientes o flemones',
						'Mal aliento',
						'Sangrado en las encias',
						'Sangrado en las encias',
						'Molestia en empastes anteriores',
						'Sequedad oral',
						'Malposición Dental',
					],
				},
			],
			areYourTeethSensitive: [
				{
					type: String,
					default: ['Al calor', 'Al dulce', 'Al frio', 'Al morder', 'Al cepillarse', 'Al la presión'],
				},
			],
			painInTheFaceNeckOrJaw: {
				type: Boolean,
				required: true,
			},
			takeSomeMedication: {
				others: {
					type: String,
				},
				options: [
					{
						type: String,
						default: [
							'Antibioticos',
							'Insulina',
							'Aspirina',
							'Anticoagulantes',
							'Tranquilizantes',
							'Para el corazon',
							'Cortisona',
							'Para la tension arterial',
							'Analgesicos',
							'Bifosfonatos',
						],
					},
				],
			},
			haveUndergoneSurgery: {
				other: {
					type: String,
				},
				yesOrNot: {
					type: Boolean,
				},
			},
			hasOrHasHad: [
				{
					type: String,
					default: ['Dolor u opresion en el pecho', 'Dificultad al respirar', 'Perdidas de conciencia, mareos o desmayos'],
				},
			],
			hasOrHaveHadHeartProblems: {
				others: {
					type: String,
				},
				options: [
					{
						type: String,
						default: [
							'Arritmias',
							'Extrasistoles',
							'Infartos',
							'Angina de pecho',
							'Lipotimias',
							'Soplos',
							'Hipertension arterial',
							'Efermedades valvulares',
						],
					},
				],
			},
			haveOrHadTheseDiseases: {
				others: {
					type: String,
				},
				options: [
					{
						type: String,
						default: [
							'Depresion',
							'Asma',
							'Otras enfermedades pulmonares',
							'Cancer',
							'Diabetes',
							'Epilepsia',
							'Enfermedades del higado',
							'Ulcera',
							'Hipertrofia prostatica',
							'Anemia',
							'Enfermedades digestivas',
							'Glaucoma',
							'Tiroides',
						],
					},
				],
			},
			hasHadOrHaveContagiousDiseases: {
				others: {
					type: String,
				},
				options: [
					{
						type: String,
						default: ['Hepatitis', 'Tuberculosis', 'Sifilis', 'VIH'],
					},
				],
			},
			bleedingAbnormallyFromExtractionOrOperation: {
				type: Boolean,
			},
			allergicToAnyMedication: {
				others: {
					type: String,
				},
				options: [
					{
						type: String,
						default: ['Anestesia dental', 'Codeina', 'Penicilina', 'Aspirina'],
					},
				],
			},
			consumeDrugs: {
				type: Boolean,
			},
			sufferFromAnyAllergies: {
				others: {
					type: String,
				},
				options: [
					{
						type: String,
						default: ['Latex', 'Asma', 'Metales', 'Alimentos'],
					},
				],
			},
			hereditaryDiseassesInYourFamily: {
				type: Boolean,
			},
			areYouPregnant: {
				type: Boolean,
			},
			vaccinatedToday: {
				type: Boolean,
			},
			smoke: {
				yesOrNot: {
					type: Boolean,
				},
				cigarettesADay: {
					type: Number,
				},
			},
			drinkAlcohol: {
				yesOrNot: {
					type: Boolean,
				},
				drinkADay: {
					type: String,
				},
			},
			sedationHasBeenPerformed: {
				yesOrNot: {
					type: Boolean,
				},
				reason: {
					type: String,
				},
			},
		},
	},
	{ timestamps: true }
)

const Patient = model('Patient', patientSchema)

module.exports = Patient
