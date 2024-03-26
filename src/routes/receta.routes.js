import {Router} from "express"
import { crearReceta, listarRecetas, obtenerReceta , editarReceta, borrarReceta} from "../controllers/receta.controllers.js";

const router = Router()

router.route('/recetas').get(listarRecetas).post(crearReceta)
router.route("/recetas/:id").get(obtenerReceta).put(editarReceta).delete(borrarReceta)
export default router