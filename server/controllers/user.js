import UserModel from '../models/user';

function find(req, res) {
  res.status(500).send({
    error: 'error',
    description: 'description',
  });
}

function create(req, res) {
  const user = new UserModel(req.body.name);
  user.get().then((data) => {
    console.log(data);
    res.status(200).json({ success: true });
  }).catch((error) => {
    console.log(error);
    res.status(400).json({ success: false });
  });
}

export default { find, create };
