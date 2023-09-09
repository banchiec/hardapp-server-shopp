const router = require('express').Router()
const authRoutes = require('./auth.routes')
const productRoutes = require('./product.routes')
const categoryRoutes = require('./category.routes')
const purchaseRoutes = require('./category.routes')
const payRoutes = require('./pay.routes')
const commentRoutes = require('./comment.routes')
const discountRoutes = require('./discounts.routes')
const BlogRoutes = require('./blog.routes')
const uploadRoutes = require('./upload.routes')
const userRoutes = require('./user.routes')
// router.use('/uploads', require('./uploads.routes'))

/* GET home page */
router.get('/', (req, res, next) => {
	res.json('All good in here')
})

router.use('/auth', authRoutes)
router.use('/products', productRoutes)
router.use('/pay', payRoutes)
router.use('/blog', BlogRoutes)
router.use('/categories', categoryRoutes)
router.use('/purchases', purchaseRoutes)
router.use('/comments', commentRoutes)
router.use('/discounts', discountRoutes)
router.use('/uploads', uploadRoutes)
router.use('/users', userRoutes)

module.exports = router
