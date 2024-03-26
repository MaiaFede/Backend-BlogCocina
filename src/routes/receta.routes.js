import {Router} from "express"
import { crearReceta, listarRecetas } from "../controllers/receta.controllers.js";

const router = Router()

router.route('/recetas').get(listarRecetas).post(crearReceta)

export default router