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

   export const obtenerReceta = async(req, res) => {
    try {
 console.info(req.params.id)
     const recetaBuscada = await Tarea.findById(req.params.id)
     if (!recetaBuscada){
        return res.status(404).json({mensaje:" El id enviado NO corresponde a ninguna de las recetas"})
     }
     res.status(200).json(recetaBuscada)
    } catch (err) {
     console.error(err);
     res.status(400).json({mensaje:'Error al obtener las recetas'})
    }   
};

export const editarReceta = async(req, res) => {
    try {
    
     const recetaBuscada = await Receta.findById(req.params.id)
    
     if (!recetaBuscada){
        return res.status(404).json({mensaje:"El id enviado NO corresponde a ninguna de las recetas"})
     }
    await Receta.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({mensaje:" La receta fue editada correctamente"})
    } catch (err) {
     console.error(err);
     res.status(500).json({mensaje:'Error al editar las recetas'})
    }
   };
