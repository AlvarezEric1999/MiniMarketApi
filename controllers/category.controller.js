import { Category } from "../model/catergory.model.js"

const getCategories = async(req,res)=>{
    try {
        
        const results = await Category.findAll()

        res.status(200).json({
            err:false,
            results
        })

    } catch (error) {
        
    }

}

const addCategory =  async(req,res)=>{
    const { id_categorie ,categorie_name}= req.body
    try {
        await Category.create(
            {
                id_categorie,
                categorie_name
            }
        )

        res.json({
            err:false,
            message:"category added"
        })
        
    } catch (error) {
        console.log(error)
    }    
}


export default{
    addCategory,
    getCategories
}