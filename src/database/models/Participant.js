const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
const MMRequest = require('./Request');
const RequestStatus = require('./RequestStatus');
class Participant extends Model { }

Participant.init({
  name: DataTypes.STRING,
  identification: DataTypes.STRING,
  request_id: DataTypes.STRING
}, {
  sequelize,
  modelName: 'participants'
});



Participant.belongsTo(MMRequest, { as: 'request', foreignKey: 'request_id', targetKey: 'request_id' });

// ++++++++++++++++++++++++++++++++++ SEED DATA +++++++++++++++++++++++ //

Participant.sync().then(async () => {

  const participant = await Participant.findAll({});
  const req = await MMRequest.findAll({});
  const reqstate = await RequestStatus.findAll({});

  if (!participant.length) {
    Participant.bulkCreate([
      { name: 'Jose', identification: '12345', 'request_id': 'abcd1234' },
      { name: 'Jose', identification: '12345', 'request_id': 'abcd54321' }
    ])
  }

  if (!reqstate.length) RequestStatus.bulkCreate([{ name: 'Open' }, { name: 'Close' }, { name: 'Analyst' }])

  if (!req.length) {
    MMRequest.bulkCreate([{
      name: 'Solicitud 1',
      request_id: 'abcd1234',
      request_status_id: 1
    },
    {
      name: 'Solicitud 2',
      request_id: 'abcd54321',
      request_status_id: 3
    }
    ]);
  }

});
module.exports = Participant;