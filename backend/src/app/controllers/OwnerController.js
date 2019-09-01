import Meetup from '../models/Meetup';
import File from '../models/File';

class OwnerController {
  async index(req, res) {
    console.log('Usuario:');
    console.log(req.userId);
    const meetups = await Meetup.findAll({
      where: { user_id: req.userId },
      include: [
        {
          model: File,
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(meetups);
  }
}

export default new OwnerController();
