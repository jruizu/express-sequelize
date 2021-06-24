const {  DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
const Participant = require('./Participant');
const RequestStatus = require('./RequestStatus');

class MMRequest extends Model {}

MMRequest.init({
  name: DataTypes.STRING,
  request_id: DataTypes.STRING, 
  request_status_id: DataTypes.INTEGER 
}, {
  sequelize, 
  modelName: 'request' 
}); 

MMRequest.belongsTo(RequestStatus, {foreignKey:'request_status_id', as:'status'});


module.exports = MMRequest;