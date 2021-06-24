
const Participant = require('../database/models/Participant');
const MMRequest = require('../database/models/Request');
const RequestStatus = require('../database/models/RequestStatus');



class ParticipantController {

    async all(req, res) {

        const { identification } = req.params;
        console.log(req.params);
        if(!identification)  return res.status(400).json({ message: 'Identification is required'});

        try {
            const response = await Participant.findAll({
                where: {identification},
                attributes: ['request_id', 'name'],
                include: [{
                    model: MMRequest, as: 'request',
                    attributes: ['name'],
                    include: [{
                        model: RequestStatus, as: 'status', attributes: ['name']
                    }]
                }
                ]
            })
            return res.status(200).json({ message: 'List Participants Successfuly', data: response });
        } catch (error) {
            return res.status(500).json({ message: 'Error', body: error })
        }
    }

}
module.exports = ParticipantController;