import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'miniMarket', 'root','root',{
        host:'localhost',
        dialect:'mysql',
        port:3306
    }
)



