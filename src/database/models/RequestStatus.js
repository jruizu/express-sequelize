const {  DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
class RequestStatus extends Model {}

RequestStatus.init({
  name: DataTypes.STRING,
}, {
  sequelize, 
  modelName: 'request_status' 
});

module.exports = RequestStatus;