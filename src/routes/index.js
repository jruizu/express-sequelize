const {Router} = require('express')
const routes = new Router(); 
const ParticipantController = require('../controllers/ParticipantController')
const employee = new ParticipantController();

module.exports = app => {
    
    routes.get('/', (req, res)=>{res.send({message:'Hola Mundo'})});
    routes.get('/api/request/all/:identification', employee.all);
    app.use(routes);
}

