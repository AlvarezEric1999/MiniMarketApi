import { Sequelize , DataTypes ,Model } from "sequelize";
import { sequelize } from "../config/db.config.js";

export class Category extends Model{}


Category.init({

    id_categorie:{
        type:DataTypes.INTEGER,
        allowNull:false
    },


    categorie_name:{
        type:DataTypes.STRING(60),
        allowNull:false
    }

},{
    sequelize,
    modelName:"category"
        
})


