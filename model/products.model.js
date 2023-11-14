import { Sequelize , DataTypes , Model } from "sequelize";
import { sequelize } from "../config/db.config.js";

export class Product extends Model{}

 Product.init({

    id_product:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true  
    },

    Description:{
        type:DataTypes.STRING(60),
        allowNull:false
    },

    id_categorie:{
        type:DataTypes.INTEGER,
        allowNull:false
    },

    quantite:{
        type:DataTypes.INTEGER,
        allowNull:false
    },

    provider:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{

    sequelize:sequelize,
    modelName:"product"
    
}    
)

