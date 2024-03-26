import {Router} from "express"
import { crearReceta, listarRecetas, obtenerReceta , editarReceta} from "../controllers/receta.controllers.js";

const router = Router()

router.route('/recetas').get(listarRecetas).post(crearReceta)
router.route("/recetas/:id").get(obtenerReceta).put(editarReceta)
export default router