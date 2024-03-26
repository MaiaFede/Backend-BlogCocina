import Receta from "../database/models/receta.js";

export const crearReceta = async(req, res)=>{
    try {
          
      const recetaNueva = new Receta(req.body);
      await recetaNueva.save();
      console.info(req.body)
      res.status(201).json({mensaje: 'La receta fue creada correctamente'})
    } catch (error) {
      console.error(error);
      res.status(500).json({
        mensaje: 'Error al crear la receta'
      })
    }  
  }

  export const listarRecetas = async(req, res) => {
    try {
     const recetas = await Receta.find()
     res.status(200).json(recetas)
    } catch (err) {
     console.error(err);
     res.status(400).json({mensaje:'Error al buscar las recetas'})
    }
   };