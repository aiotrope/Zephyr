import express from 'express'
import indexController from '../controllers/index'

const router = express.Router()

router.get('/hello', indexController.helloWorld)
router.get('/', indexController.indexPage)
router.post('/vehicle/add', indexController.addVehicle)
router.get('/vehicle/search/:model', indexController.fetchVehicleByModel)

export default router
