import { Product } from "../model/products.model.js"


const getAllProducts = async(req,res)=>{                                                                                                                                                                                                                                                                                                                                                                                        
    const results = await Product.findAll()
    res.json({
        err:false,
        results
    })
    
}

const getProduct = async(req,res)=>{
    const {id} = req.params
  
    const results = await Product.findOne({
        where:{
            id_product:id
        }
    })
    res.json({err:false, results})
}



const addProduct =async(req,res)=>{

    const {Description,
    id_categorie,
    quantite,
    provider
    }= req.body

    try{
        await Product.create({
            Description,
            id_categorie,
            quantite,
            provider  
     });

     res.status(200).json({ err:false , message:"all products"})
    
    }catch(erro){
       console.log(erro);
    }
}



const editProduct = async(req,res)=>{
    const {id} = req.params
    const {Description,
        id_categorie,
        quantite,
        provider
        }= req.body

    try {
        const updateProducts = await Product.update({Description,id_categorie,quantite,provider},{
            where:{
                id_product:id
            }
        })
        res.json({
            err:false,message:"product updated"
        });


    } catch (error) {
        
        console.log(error)
    }
}



const deleteProduct = async(req,res)=>{
    const {id} = req.param
    try {
        await Product.destroy({
            where:{
                id_product:id
            }
        })
    
        res.json({
            errr:false,message:"product has been deleted"
        })
        
    } catch (error) {
        console.log(error)
    }


   
}


export default{
    getAllProducts,
    getProduct,
    addProduct,
    editProduct,
    deleteProduct
}