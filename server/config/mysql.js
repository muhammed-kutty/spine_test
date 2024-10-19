import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('spine_demo', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const  connectDB=async()=> {
  try {
    await sequelize.authenticate();
    console.log('Connection to MySQL has been established successfully.');
    await sequelize.sync({ force: false }); 
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}



export {connectDB ,sequelize};
