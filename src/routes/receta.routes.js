import {Router} from "express"
import { crearReceta } from "../controllers/receta.controllers.js";

const router = Router()

router.route('/recetas').post(crearReceta)

export default router