import express from 'express';
import user from '../controllers/user';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
  .get((req, res) => user.find(req, res))
  .post((req, res) => user.create(req, res));

export default router;
