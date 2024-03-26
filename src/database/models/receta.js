import mongoose, {Schema} from "mongoose";

const recetaSchema = new Schema({
    nombreReceta:{
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50,
        unique:true
    },
    imagen:{
        type: String,
        required: true,
        validate: {
            validator: (dato)=>{
                const pattern = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/
               return pattern.test(dato)
            }
        }
    },
    categoria:{
        type:String,
        required:true,
        enum: ['Nuevo', 'Batidos','Dulce', 'Salado']
    },
    ingredientes:{
        type:[String],
        required:true
    },
    instrucciones:{
        type:[String],
        required:true,
        minLength:10,
        maxLength:500
    }
})


const Receta = mongoose.model('receta', recetaSchema);

export default Receta;